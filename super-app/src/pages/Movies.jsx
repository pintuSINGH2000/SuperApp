import React, { useContext, useState } from "react";
import Genere from "../components/Genere";
import SingleGenere from "../components/SingleGenere";
import "../assets/css/movie.css";
import GenereChips from "../components/GenereChips";
import danger from "../assets/images/danger.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Movies = () => {
  const [selected, setSelected] = useState([]);
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
      user["preference"] = selected;
      updateUser(user);
      navigate("/");
  }
  return (
    <>
      <div className="movie-container">
        <div className="movie-container-left">
          <div className="title imp-text single-day">Super app</div>
          <p className="roboto-700 entertainment">Choose your entertainment category</p>
          <div className="genere-chip-container">
          {selected.map((genere,index) => (
            <GenereChips key={index} color="rgba(20, 138, 8, 1)" data={genere} selected={selected} setSelected={setSelected} isClose={true}/>
          ))}
          </div>
          <div className="roboto-400 action"><img src={danger} width="30px" height="30px"/>Minimum 3 category required</div>
        </div>
        <div className="movie-container-right">
          <div className="genere-container">
            {Genere.map((genere) => (
              <SingleGenere key={genere.id} data={genere} selected={selected} setSelected={setSelected}/>
            ))}
          </div>
          <button className="next dm-sans-500" disabled={selected.length<3} onClick={handleClick}>Next Page</button>
        </div>
      </div>
    </>
  );
};

export default Movies;
