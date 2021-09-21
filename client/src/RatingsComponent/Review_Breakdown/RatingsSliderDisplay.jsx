import React from 'react';

const RatingsSliderDisplay = ({ scores, characteristic }) => {
  const { key, value } = scores;
  return (
    <>
      <div className="ratings-summary-slider-container">
          <p className="slider-name">{key}</p>
          <input type="range"  name={key}
            min="1" max="5" value={value} step="any" className="slider" readOnly/>
          <div className="ticks">
            <span className="tick"></span>
            <span className="tick"></span>
          </div>
          <div className="slider-text">
            <span className="slider-one">{characteristic[0]}</span>
            <span className="slider-two">{characteristic[1]}</span>
            <span className="slider-three">{characteristic[2]}</span>
          </div>
      </div>
    </>
  );
};

export default RatingsSliderDisplay;
