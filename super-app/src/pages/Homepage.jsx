import React from "react";
import Profile from "../components/Profile";
import "../assets/css/homepage.css";
import Note from "../components/Note";
import Timer from "../components/Timer";
import News from "../components/News";
import { Weather } from "../components/Weather";
import Browse from './Browse';
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
       navigate("/browse");
  }
  return (
    <>
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-profile-weather-note">
          <div className="homepage-profile-weather">
            <Profile />
            <Weather />
          </div>
          <div className="homepage-note">
            <Note />
          </div>
        </div>
        <div className="homepage-timer">
          <Timer />
        </div>
      </div>
      <div className="homepage-news">
        <News />
      </div>
    </div>
    <button className="next browse dm-sans-500" onClick={handleClick}>Browse</button>
    </>
  );
};

export default Homepage;
