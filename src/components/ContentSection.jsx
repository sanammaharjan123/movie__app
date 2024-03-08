// ContentSection.js
import React from 'react';
import './contentsection.css'
import banner1  from '../images/movies/banner1.jpg'
import banner2 from '../images/movies/banner2.jpg'

const ContentSection = () => {
  return (
    <div className="content-section col-md-6">
      <div className="content-image">
        <img src={banner1} alt= 'movie-poster'/>
        <hr className='col-md-6'/>
        <img src={banner2} alt='movie-poster' />    
      </div>
    </div>
  );
};

export default ContentSection;
