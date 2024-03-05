import React, { useState } from "react";
import Genere from "../components/Genere";
import SingleGenere from "../components/SingleGenere";
import "../assets/css/movie.css";
import GenereChips from "../components/GenereChips";
import danger from "../assets/images/danger.png";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    
      const data=JSON.parse(localStorage.getItem("user"));
      data["preference"] = selected;
      const updatedData=JSON.stringify(data);
      localStorage.setItem("user",updatedData);
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
            <GenereChips key={index} style={{color:"red"}} data={genere} selected={selected} setSelected={setSelected} />
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
          <div className="next dm-sans-500" style={{visibility:selected.length<3&&"hidden"}} onClick={handleClick}>Next Page</div>
        </div>
      </div>
    </>
  );
};

export default Movies;
