import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import StarDisplay from '../StarDisplay.jsx';
import * as RC from './RatingsComponentStyledComponent.jsx';

const RatingsStarHeader = () => {
  const { ratingsScore } = useContext(ProductContext);
  const { avgRating } = ratingsScore;

  return (
    <>
      <RC.RatingsAndReviewContainer>
        <RC.RatingsAndReviewText>
          {parseFloat(avgRating).toFixed(1)}
        </RC.RatingsAndReviewText>
        <RC.RatingsAndReviewStarContainer>
          <StarDisplay stars={{ width: '20', height: '20' }} component={'RatingsStarHeader'}/>
        </RC.RatingsAndReviewStarContainer>
      </RC.RatingsAndReviewContainer>
    </>
  )
};
// 0 40 62 100

export default RatingsStarHeader;
