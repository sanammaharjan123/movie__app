import React, { useState, useEffect } from "react";
import "./banner.css";
//import bgImg from "../images/movies/bg-transformer.jpg";
import MovieContent from "../components/MovieContent";
import MovieSlider from "../components/MovieSlider";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("data/db.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log("Error", err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };
  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie">
            <img
              src={movie.bgImg}
              alt="Background Img"
              className={`bgImg ${movie.active ? "active" : undefined}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 com-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate movie={movie} />
                  <PlayBtn movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSlider slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
};

export default Banner;
