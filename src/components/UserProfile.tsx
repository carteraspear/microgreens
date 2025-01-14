const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>Your Profile</h2>
      <p>This is your profile page.</p>
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VrwM-9q_4Q0pzVzKBESWvdpaid_35FFMgQ&s"
            alt="Your Profile"
          />
        </div>
        <p className="username">@YourUsername</p>
        <p className="bio">This is your bio. Edit your profile to add more details!</p>
      </div>
    </div>
  );
};

export default UserProfile;
