import React from 'react';
import './movieContent.css';
import titleImg from "../images//movies/bg-transformer.jpg";

const MovieContent = ({movie}) => {
  return (
    <div className={`content ${movie.active ? 'active':undefined}`}>
                <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
                <h4>
                  <span>{movie.year}Year</span>
                  <span>
                    <i>{movie.ageLimit}</i>
                  </span>
                  <span>{movie.length}</span>
                  <span>{movie.category}</span>
                </h4>
                <p>
                  {
                    movie.description
                  }
                </p>
                
              </div>
  )
}

export default MovieContent
