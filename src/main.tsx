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
        <div className="top-bar">
          <div className="profile-picture"></div>
          <div className="search-field">
            <span className="icon">🔍</span>
            <input type="text" placeholder="Search and filter…" />
          </div>
          <div className="hamburger-menu"></div>
        </div>
        <main>
          <App />
        </main>
        <div className="green-circle">↓</div>
        <div className="bottom-bar">
          <div className="tab">Neighbors</div>
          <div className="tab">Posts</div>
          <div className="tab">Favorites</div>
          <div className="tab">Messages</div>
        </div>
      </div>
    </React.StrictMode>
  );
};

// Render to DOM
ReactDOM.createRoot(document.getElementById("root")!).render(<MicrogreensApp />);
