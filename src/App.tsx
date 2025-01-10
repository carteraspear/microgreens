import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// You can import Font Awesome Icons (use a CDN link or install via npm)
import { FaHome, FaPen, FaStar, FaEnvelope } from "react-icons/fa"; // Example icons

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
          <FaHome size={24} /> {/* Icon for Neighbors */}
          Neighbors
        </div>
        <div
          className={`tab ${activeTab === "Posts" ? "active" : ""}`}
          onClick={() => setActiveTab("Posts")}
        >
          <FaPen size={24} /> {/* Icon for Posts */}
          Posts
        </div>
        <div
          className={`tab ${activeTab === "Favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("Favorites")}
        >
          <FaStar size={24} /> {/* Icon for Favorites */}
          Favorites
        </div>
        <div
          className={`tab ${activeTab === "Messages" ? "active" : ""}`}
          onClick={() => setActiveTab("Messages")}
        >
          <FaEnvelope size={24} /> {/* Icon for Messages */}
          Messages
        </div>
      </div>
    </div>
  );
}
function NeighborsPage() {
  const [neighbors, setNeighbors] = useState<any[]>([]); // Array to store neighbor profiles
  const [hasMore, setHasMore] = useState(true); // To check if we need more data

  useEffect(() => {
    // Load initial neighbors when the component mounts
    loadNeighbors();
  }, []);

  const loadNeighbors = () => {
    // Fetch next set of neighbors from your API or database
    const newNeighbors = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      username: `User ${index + 1}`,
      bio: `This is user ${index + 1}'s bio...`,
      profileImage: "https://placekitten.com/200/200", // Placeholder profile image
    }));
    setNeighbors((prev) => [...prev, ...newNeighbors]);

    // Simulate data being available
    if (newNeighbors.length < 9) {
      setHasMore(false);
    }
  };

  return (
    <div className="neighbors-page">
      <h2>Neighbors</h2>
      <p>Connect with people in your neighborhood!</p>
      <InfiniteScroll
        dataLength={neighbors.length} // Length of loaded data
        next={loadNeighbors} // Function to load more data
        hasMore={hasMore} // Flag to indicate if there's more data
        loader={<div>Loading...</div>}
        endMessage={<div>No more neighbors!</div>}
      >
        <div className="neighbors-grid">
          {neighbors.map((neighbor) => (
            <div
              key={neighbor.id}
              className="neighbor-card"
              onClick={() => console.log(`Navigating to ${neighbor.username}'s profile`)}
            >
              <div className="profile-image">
                <img src={neighbor.profileImage} alt={neighbor.username} />
              </div>
              <div className="neighbor-info">
                <p className="username">@{neighbor.username}</p>
                <p className="bio">{neighbor.bio.slice(0, 30)}...</p>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default NeighborsPage;
export default App;
