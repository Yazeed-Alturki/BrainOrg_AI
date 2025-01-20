// filepath: /Users/yazeedalturki/Desktop/BrainOrg_AI/transform/pages/_app.js
import '../styles/global.css';
import { useEffect } from 'react';
import mermaid from 'mermaid';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;