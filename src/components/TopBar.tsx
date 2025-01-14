import React from "react";

const TopBar = ({
  viewingProfile,
  setViewingProfile,
}: {
  viewingProfile: boolean;
  setViewingProfile: (viewing: boolean) => void;
}) => {
  return (
    <div className="top-bar">
      {viewingProfile ? (
        <button
          className="back-button"
          onClick={() => setViewingProfile(false)}
        >
          ← Back
        </button>
      ) : (
        <>
          <div
            className="profile-picture"
            onClick={() => setViewingProfile(true)}
          ></div>
          <div className="search-field">
            <span className="icon">🔍</span>
            <input type="text" placeholder="Search and filter…" />
          </div>
          <div className="hamburger-menu">☰</div>
        </>
      )}
    </div>
  );
};

export default TopBar;
