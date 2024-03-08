import React, { useState, useEffect } from "react";
import "./movies.css";
import Card from "../components/Card";

function Movies() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("data/db.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Error", err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  });
  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Movies</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>Filters</p>
          </div>
        </div>
        <div className="row mt-3">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card key={movie._id} movie= {movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Movies;
