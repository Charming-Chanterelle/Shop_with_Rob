import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';

const RatingsStarHeader = () => {
  const { ratingsScore } = useContext(ProductContext);
  console.log(re)
  return (
    <>
      <span className="ratings-header-text">Ratings & Reviews</span>
      <div className="ratings-header-container">
        <span className="ratings-header-figure">{parseFloat(ratingsScore.avgRating).toFixed(1)}</span>
        <div className="ratings-header-stars">

        </div>
      </div>
    </>
  )
};
// 0 40 62 100

export default RatingsStarHeader;
