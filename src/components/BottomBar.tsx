import React from "react";
import { FaHome, FaPen, FaStar, FaEnvelope } from "react-icons/fa";

const BottomBar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="bottom-bar">
      <div
        className={`tab ${activeTab === "Neighbors" ? "active" : ""}`}
        onClick={() => setActiveTab("Neighbors")}
      >
        <FaHome size={24} /> Neighbors
      </div>
      <div
        className={`tab ${activeTab === "Posts" ? "active" : ""}`}
        onClick={() => setActiveTab("Posts")}
      >
        <FaPen size={24} /> Posts
      </div>
      <div
        className={`tab ${activeTab === "Favorites" ? "active" : ""}`}
        onClick={() => setActiveTab("Favorites")}
      >
        <FaStar size={24} /> Favorites
      </div>
      <div
        className={`tab ${activeTab === "Messages" ? "active" : ""}`}
        onClick={() => setActiveTab("Messages")}
      >
        <FaEnvelope size={24} /> Messages
      </div>
    </div>
  );
};

export default BottomBar;
