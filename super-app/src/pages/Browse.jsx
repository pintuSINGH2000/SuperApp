import React, { useContext } from "react";
import MovieGenres from "../components/MovieGenere";
import { AuthContext } from "../context/AuthContext";
import Movilist from "../components/Movilist";
import profilepic from "../assets/images/profilepic.png";
import "../assets/css/browse.css";

const Browse = () => {
  const { user, updateUser } = useContext(AuthContext);
  console.log(user);
  console.log(user.preference);
  return (
    <div className="browse-container">
        <div className="browse-nav">
            <div className="nav-left imp-text single-day">Super app</div>
            <div className="nav-right"><img src={profilepic}/></div>
        </div>
      <div className="movielist-title roboto-600">
        Entertainment according to your choice
      </div>
      <div className="">
      {MovieGenres.map((movieGenere) =>
        user.preference.map(
          (genere, ind) =>
            genere === movieGenere.name && (
              <Movilist key={ind} movieGenere={movieGenere} />
            )
        )
      )}
      </div>
    </div>
  );
};

export default Browse;
