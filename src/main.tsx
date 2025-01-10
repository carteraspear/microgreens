import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// Configure AWS Amplify
Amplify.configure(outputs);

// Main Component
const MicrogreensApp = () => {
  return (
    <React.StrictMode>
      <div id="app-container">
        <main>
          <App />
        </main>
      </div>
    </React.StrictMode>
  );
};

// Render to DOM
ReactDOM.createRoot(document.getElementById("root")!).render(<MicrogreensApp />);
