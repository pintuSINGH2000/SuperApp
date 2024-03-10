import React, { useEffect, useState } from "react";

const Movilist = ({ movieGenere }) => {
  const [movie, setMovie] = useState();
  const apiKey = import.meta.env.VITE_MOVIE_KEY;
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${movieGenere.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <div className="movielist-container">

     <div className="movie-name roboto-500" style={{color:"rgba(135, 135, 135, 1)"}}>{movieGenere.name}</div>
      <div className="movie-list">
        {movie?.results?.map((movie, index) =>
          index <= 3 ? (
            <div className="movie-img" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={`Movie Poster ${index}`}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Movilist;
