import React, { Component } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegGem } from 'react-icons/fa';

const RatingsStarHeader = () => {
  return (
    <>
      <span className="ratings-header-text">Ratings & Reviews</span>
      <div className="ratings-header-container">
        <span className="ratings-header-figure">4.5</span>
        <div className="ratings-header-stars">
          <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
        </div>
      </div>
    </>
  )
};


export default RatingsStarHeader;
