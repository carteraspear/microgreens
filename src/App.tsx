import { useState } from "react";
import TopBar from "./components/TopBar.tsx";
import BottomBar from "./components/BottomBar.tsx";
import UserProfile from "./components/UserProfile.tsx";
import MainContent from "./components/MainContent.tsx";

function App() {
  const [activeTab, setActiveTab] = useState("Neighbors");
  const [viewingProfile, setViewingProfile] = useState(false);

  return (
    <div className="app-container">
      {/* Top Bar */}
      <TopBar viewingProfile={viewingProfile} setViewingProfile={setViewingProfile} />

      {/* Main Content */}
      <main className="content">
        {viewingProfile ? (
          <UserProfile />
        ) : (
          <MainContent activeTab={activeTab} />
        )}
      </main>

      {/* Green Circle */}
      {!viewingProfile && <div className="green-circle">↓</div>}

      {/* Bottom Bar */}
      {!viewingProfile && (
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
}

export default App;
