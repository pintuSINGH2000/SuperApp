import React, { useContext, useEffect } from "react";
import profilePic from "../assets/images/profile.png";
import GenereChips from "./GenereChips";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {user}= useContext(AuthContext);

  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={profilePic} alt="profile Pic"/>
      </div>
      <div className="profile-details">
        <div className="user-name roboto-400">{user.name}</div>
        <div className="user-email roboto-400">{user.email}</div>
        <div className="user-user-name roboto-500">{user.userName}</div>
        <div className="profile-genere-container">
        {user.preference&&user.preference.map((genere, index) => (
             <GenereChips key={index} color="rgba(159, 148, 255, 1)" data={genere} isClose={false} classData="profile-genere-chips" />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
