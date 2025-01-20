# BrainDump AI

_Transform your stress into relaxation and transition to a more peaceful state of mind with BrainDump._

BrainDump AI is an app designed to help users organize their thoughts by allowing them to input their ideas and receive structured outputs in the form of diagrams or flowcharts.

## Features

- **Calming Interface**: A minimalistic and calming interface for users to 'braindump' their thoughts.
- **Input Box**: A large input box for entering text.
- **Transform Button**: A "Transform" button to submit the input for processing.
- **Mermaid.js Diagrams**: Generate and display diagrams using Mermaid.js.
- **Download Diagrams**: Option to download the generated diagrams as images.

## Live Demo

Check out the live version of BrainDump AI: [BrainDump AI]([https://your-deployed-url.vercel.app](https://braindump-ai-tzyy.onrender.com/))

## Demo Video

[![YouTube Video Title](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

## Project Structure

```
BrainDump
├── pages
│   ├── api
│   │   └── transform.js       # API route for processing input text
│   └── index.js               # Main page of the application
├── public                     # Directory for static assets
├── styles
│   └── Home.module.css        # CSS styles for the Home component
├── .env.local                 # Environment variables (not included in the repository)
├── .gitignore                 # Git ignore file
├── next.config.js             # Next.js configuration file
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js installed. You can check if it is installed with `node -v`.
- npm installed. You can check if it is installed with `npm -v`.

### Local Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/BrainDump.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd BrainDump
   ```

3. **Install the dependencies**:
   ```sh
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env.local` file in the root of your project and add the following:
     ```plaintext
     GITHUB_TOKEN=your_github_token_here
     ```

5. **Run the development server**:
   ```sh
   npm run dev
   ```

6. **Open your browser and go to** `http://localhost:3000` **to see the application in action**.

## Deployment

### Deploying to Render

1. **Create a Vercel Account**:
   - Go to [Vercel](https://vercel.com/) and sign up for an account.

2. **Link GitHub Repository to Vercel**:
   - In your Vercel dashboard, link your project to the GitHub repository.

3. **Configure Environment Variables**:
   - In your Vercel project dashboard, navigate to the "Settings" tab.
   - Under "Environment Variables", add your environment variables (`GITHUB_TOKEN`).

4. **Deploy Your Project**:
   - Vercel will automatically deploy your project whenever you push changes to the repository.

### Deploying to Render

1. **Create a Render Account**:
   - Go to [Render](https://render.com/) and sign up for an account.

2. **Create a New Web Service on Render**:
   - Go to the Render dashboard.
   - Click on "New" and select "Web Service".
   - Connect your GitHub account and select the repository you want to deploy.

3. **Configure the Web Service**:
   - **Name**: Give your service a name.
   - **Branch**: Select the branch you want to deploy (e.g., `main`).
   - **Build Command**: Use the default build command for Next.js:
     ```sh
     npm install && npm run build
     ```
   - **Start Command**: Use the default start command for Next.js:
     ```sh
     npm start
     ```

4. **Set Environment Variables**:
   - In the "Environment" section, add your environment variables (`GITHUB_TOKEN`).

5. **Deploy Your Project**:
   - Click on "Create Web Service" to start the deployment process.
   - Render will automatically build and deploy your application.

## Future Enhancements

- Implement user authentication to save and manage user inputs.
- Add more diagram types and customization options.
- Add Speech-to-Text for more convenience
