import React from 'react';
import { FaSketch } from 'react-icons/fa';

const RatingsSummarySlider = () => {
  return (
    <>
      <div className="ratings-summary-slider-container">
        <div className="slider-name">
          Size
        </div>
        <div className="slider-rating">
          <span className="slider-bar-low">a</span>
          <span className="slider-bar-med"><FaSketch /></span><span className="slider-bar-high"></span>
        </div>
        <div className="slider-desc">
          <span className="slider-desc-low">
            Too small
          </span>
          <span className="slider-desc-med">
            Perfect
          </span>
          <span className="slider-desc-high">
            Too large
          </span>
        </div>
      </div>
      <div className="ratings-summary-slider-container">
        <div className="slider-name">
          Comfort
        </div>
        <div className="slider-rating">
          <span className="slider-bar-low">a</span>
          <span className="slider-bar-med"></span><span className="slider-bar-high"><FaSketch /></span>
        </div>
        <div className="slider-desc">
          <span className="slider-desc-low">
            Poor
          </span>
          <span className="slider-desc-med">
          </span>
          <span className="slider-desc-high">
            Perfect
          </span>
        </div>
      </div>
    </>
  )
};

export default RatingsSummarySlider;
