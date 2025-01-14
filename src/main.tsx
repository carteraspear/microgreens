
import NeighborsPage from "./pages/NeighborsPage.tsx";
import PostsPage from "./pages/PostsPage.tsx";

const MainContent = ({ activeTab }: { activeTab: string }) => {
  return (
    <>
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
    </>
  );
};

export default MainContent;
