import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import mermaid from 'mermaid';
import { toPng } from 'html-to-image';

const Home = () => {
  const [braindump, setBraindump] = useState('');
  const [diagram, setDiagram] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const diagramRef = useRef(null);

  const handleTransform = async () => {
    setLoading(true);
    const response = await fetch('/api/transform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ braindump }),
    });

    const data = await response.json();
    const cleanedDiagram = data.diagram.replace(/```mermaid|```/g, '').trim();
    setDiagram(cleanedDiagram);
    setLoading(false);
    setShowModal(true);
  };

  const handleDownload = () => {
    if (diagramRef.current) {
      toPng(diagramRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'diagram.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Failed to download image', err);
        });
    }
  };

  useEffect(() => {
    if (diagram) {
      mermaid.contentLoaded();
    }
  }, [diagram]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Mind Map Creator</h1>
        <h2 className={styles.subheading}>Transform Your Thoughts</h2>
        <p className={styles.info}>
          Pour out your scattered thoughts and let us organize them into clear, actionable insights.
        </p>
        <textarea 
          className={styles.inputBox} 
          placeholder="Share your thoughts, ideas, or concerns here... We'll help you make sense of them." 
          rows="10" /* Increased rows for better input space */
          maxLength={1000} /* Limit input to 1000 characters */
          value={braindump}
          onChange={(e) => setBraindump(e.target.value)}
        />

        <button className={styles.submitButton} onClick={handleTransform} disabled={loading}>
          {loading ? (
            <div className={styles.spinner}>
              <div className={styles.doubleBounce1}></div>
              <div className={styles.doubleBounce2}></div>
            </div>
          ) : (
            'Transform'
          )}
        </button>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
            <div className={styles.diagram} ref={diagramRef}>
              <div className="mermaid">
                {diagram}
              </div>
            </div>
            <button className={styles.downloadButton} onClick={handleDownload}>Download as Image</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;