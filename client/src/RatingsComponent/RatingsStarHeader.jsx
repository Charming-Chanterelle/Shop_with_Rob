import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import StarDisplay from '../StarDisplay.jsx';

const RatingsStarHeader = () => {
  const { ratingsScore } = useContext(ProductContext);
  const {avgRating, numberOfRatings} = ratingsScore;

  return (
    <>
      <span className="ratings-header-text">Ratings & Reviews</span>
      <div className="ratings-header-container">
        <span className="ratings-header-figure">{parseFloat(ratingsScore.avgRating).toFixed(1)}</span>
        <div className="ratings-header-stars">
          <StarDisplay stars={{ width: '20', height: '20' }} />
        </div>
      </div>
    </>
  )
};
// 0 40 62 100

export default RatingsStarHeader;
