import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaHome, FaPen, FaStar, FaEnvelope, FaComment, FaShare } from "react-icons/fa"; // Import missing icons

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
        {activeTab === "Neighbors" && <NeighborsPage />}
        {activeTab === "Posts" && <PostsPage />}
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

function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]); // Array to store posts
  const [hasMore, setHasMore] = useState(true); // Flag to check if more data is available

  useEffect(() => {
    // Load initial posts when the component mounts
    loadPosts();
  }, []);

  const loadPosts = () => {
    // Simulate fetching posts
    const newPosts = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      username: `User ${index + 1}`,
      location: `Location ${index + 1}`,
      postText: `This is post number ${index + 1}. It's a short description of the post...`,
      profileImage: "https://placekitten.com/200/200", // Placeholder profile image
    }));
    setPosts((prev) => [...prev, ...newPosts]);

    // Simulate no more posts after 50 posts
    if (newPosts.length < 9) {
      setHasMore(false);
    }
  };

  const handleFavorite = (postId: number) => {
    console.log(`Favoriting post ${postId}`);
    // Add post to favorites logic
  };

  const handleShare = (postId: number) => {
    console.log(`Sharing post ${postId}`);
    // Copy post link to clipboard logic
  };

  const handleMessage = (postId: number) => {
    console.log(`Messaging post ${postId}`);
    // Add post user to active user's messages
  };

  const handleUsernameClick = (username: string) => {
    console.log(`Navigating to profile of ${username}`);
    // Navigate to user's profile
  };

  return (
    <div className="posts-page">
      <h2>Posts</h2>
      <p>See what's happening nearby!</p>

      <InfiniteScroll
        dataLength={posts.length} // Length of loaded data
        next={loadPosts} // Function to load more data
        hasMore={hasMore} // Flag to indicate if there's more data
        loader={<div>Loading...</div>}
        endMessage={<div>No more posts!</div>}
      >
        <div className="posts-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => console.log(`Navigating to post ${post.id}`)} // For detailed post page
            >
              <div className="post-header">
                <div className="profile-image">
                  <img src={post.profileImage} alt={post.username} />
                </div>
                <p
                  className="username"
                  onClick={() => handleUsernameClick(post.username)}
                >
                  @{post.username}
                </p>
                <p className="location">{post.location}</p>
              </div>
              <p className="post-text">{post.postText}</p>

              <div className="post-actions">
                <button onClick={() => handleFavorite(post.id)}>
                  <FaStar size={18} /> Favorite
                </button>
                <button onClick={() => console.log("Comments clicked")}>
                  <FaComment size={18} /> Comment
                </button>
                <button onClick={() => handleShare(post.id)}>
                  <FaShare size={18} /> Share
                </button>
                <button onClick={() => handleMessage(post.id)}>
                  <FaEnvelope size={18} /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
