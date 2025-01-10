import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Neighbors");

  return (
    <div className="app-container">
      {/* Top App Bar */}
      <div className="top-bar">
        <div className="profile-picture"></div>
        <div className="search-field">
          <span className="icon">🔍</span>
          <input type="text" placeholder="Search and filter…" />
        </div>
        <div className="hamburger-menu">☰</div>
      </div>

      {/* Main Content */}
      <main className="content">
        {activeTab === "Neighbors" && (
          <div className="neighbors-page">
            <h2>Neighbors</h2>
            <p>Connect with people in your neighborhood!</p>
          </div>
        )}
        {activeTab === "Posts" && (
          <div className="posts-page">
            <h2>Posts</h2>
            <p>See what's happening nearby!</p>
          </div>
        )}
        {activeTab === "Favorites" && (
          <div className="favorites-page">
            <h2>Favorites</h2>
            <p>Here are your saved posts and users.</p>
          </div>
        )}
        {activeTab === "Messages" && (
          <div className="messages-page">
            <h2>Messages</h2>
            <p>Your opened conversations will appear here.</p>
          </div>
        )}
      </main>

      {/* Green Circle */}
      <div className="green-circle">↓</div>

      {/* Bottom App Bar */}
      <div className="bottom-bar">
        <div
          className={`tab ${activeTab === "Neighbors" ? "active" : ""}`}
          onClick={() => setActiveTab("Neighbors")}
        >
          Neighbors
        </div>
        <div
          className={`tab ${activeTab === "Posts" ? "active" : ""}`}
          onClick={() => setActiveTab("Posts")}
        >
          Posts
        </div>
        <div
          className={`tab ${activeTab === "Favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("Favorites")}
        >
          Favorites
        </div>
        <div
          className={`tab ${activeTab === "Messages" ? "active" : ""}`}
          onClick={() => setActiveTab("Messages")}
        >
          Messages
        </div>
      </div>
    </div>
  );
}

export default App;
