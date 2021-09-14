import React from 'react';

const RatingsSummaryChart = () => {
  return (
    <>
      <div className="summary-barchart-container">
        <div className="five-star-container">
          <span className="five-star-title"><u>5 stars</u></span>
          <span className="five-star-graph-one"></span>
          <span className="five-star-graph-two"></span>
        </div>
        <div className="four-star-container">
          <span className="five-star-title"><u>4 stars</u></span>
          <span className="five-star-graph-one"></span>
          <span className="five-star-graph-two"></span>
        </div>
        <div className="three-star-container">
          <span className="five-star-title"><u>3 stars</u></span>
          <span className="five-star-graph-one"></span>
          <span className="five-star-graph-two"></span>
        </div>
        <div className="two-star-container">
          <span className="two-star-title"><u>2 stars</u></span>
          <span className="two-star-graph"></span>
        </div>
        <div className="one-star-container">
          <span className="one-star-title"><u>1 star</u></span>
          <span className="one-star-graph"></span>
        </div>
      </div>
    </>
  )
};


export default RatingsSummaryChart;
