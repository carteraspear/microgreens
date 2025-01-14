import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaStar, FaComment, FaShare, FaEnvelope } from "react-icons/fa";

const PostsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
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

    // Simulate end of data
    if (newPosts.length < 9) {
      setHasMore(false);
    }
  };

  const handleFavorite = (postId: number) => {
    console.log(`Favoriting post ${postId}`);
    // Add favorite logic here
  };

  const handleShare = (postId: number) => {
    console.log(`Sharing post ${postId}`);
    // Add share logic here
  };

  const handleMessage = (postId: number) => {
    console.log(`Messaging post ${postId}`);
    // Add message logic here
  };

  const handleUsernameClick = (username: string) => {
    console.log(`Navigating to profile of ${username}`);
    // Add profile navigation logic here
  };

  return (
    <div className="posts-page">
      <h2>Posts</h2>
      <p>See what's happening nearby!</p>

      <InfiniteScroll
        dataLength={posts.length}
        next={loadPosts}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        endMessage={<div>No more posts!</div>}
      >
        <div className="posts-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              className="post-card"
              onClick={() => console.log(`Navigating to post ${post.id}`)}
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
};

export default PostsPage;
