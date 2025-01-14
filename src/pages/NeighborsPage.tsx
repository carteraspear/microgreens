import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const NeighborsPage = () => {
  const [neighbors, setNeighbors] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadNeighbors();
  }, []);

  const loadNeighbors = () => {
    // Fetch or simulate fetching neighbors
    const newNeighbors = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      username: `User ${index + 1}`,
      bio: `This is user ${index + 1}'s bio...`,
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VrwM-9q_4Q0pzVzKBESWvdpaid_35FFMgQ&s", // Placeholder image
    }));

    setNeighbors((prev) => [...prev, ...newNeighbors]);

    // Simulate end of data
    if (newNeighbors.length < 9) {
      setHasMore(false);
    }
  };

  return (
    <div className="neighbors-page">
      <h2>Neighbors</h2>
      <InfiniteScroll
        dataLength={neighbors.length}
        next={loadNeighbors}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
        endMessage={<div>No more neighbors!</div>}
      >
        <div className="neighbors-grid">
          {neighbors.map((neighbor) => (
            <div
              key={neighbor.id}
              className="neighbor-card"
              onClick={() =>
                console.log(`Navigating to ${neighbor.username}'s profile`)
              }
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
};

export default NeighborsPage;
