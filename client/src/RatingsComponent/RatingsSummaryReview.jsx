import React, { Component } from 'react';
import RatingsSummaryChart from './RatingsSummaryChart.jsx'
import RatingsSummarySlider from './RatingsSummarySlider.jsx'

const RatingsSummaryReview = () => {
  return (
    <>
      <div className="ratings-summary-review">
        <div className="ratings-summary-text">
          <span>90% of reviews recommend this product</span>
        </div>
        <div className="ratings-summary-chart">
          <RatingsSummaryChart />
        </div>
        <div className="ratings-summary-slider">
          <RatingsSummarySlider />
        </div>
      </div>
    </>
  )
};

{/* <RatingsSummaryChart /> */}
{/* <RatingsSummarySlider /> */}
export default RatingsSummaryReview;
