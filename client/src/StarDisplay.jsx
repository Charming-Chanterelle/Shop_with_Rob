/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './contexts/ProductContext.jsx';
import StarRating from './StarRating.jsx';

// styled comps
import * as S from './OverviewStyledComponents.jsx';
// import product from './OverviewTESTproductReg.js';
// import productStyle from './OverviewTESTstyle.js';

// params: product obj, all_styles arr, ratings arr

const getRatings = ({ avgRating }) => {
  const ratings = Number(avgRating);
  let ratingsStorage = [];

  if (ratings === 0) {
    ratingsStorage = ['0%', '0%', '0%', '0%', '0%'];
    return ratingsStorage;
  }

  const minRating = Math.floor(ratings);
  const maxRating = 5 - Math.ceil(ratings);
  const remaining = ratings - minRating;
  for (let i = 0; i < minRating; i++) {
    ratingsStorage.push('100%');
  }
  // when min rating = 5 then the ratings should be 5.
  if (minRating === 5) {
    return ratingsStorage;
  }
  // 0 40 62 100
  if (remaining <= 0.25) {
    ratingsStorage.push('0%');
  } else if (remaining > 0.25 && remaining <= 0.50) {
    ratingsStorage.push('40%');
  } else if (remaining > 0.50 && remaining < 1) {
    ratingsStorage.push('62%');
  } else {
    ratingsStorage.push('100%');
  }
  for (let j = 0; j < maxRating; j++) {
    ratingsStorage.push('0%');
  }

  return ratingsStorage;
};

const StarDisplay = () => {
  // get new style by id

  const {
    product, styles, ratingsScore, loaded,
  } = useContext(ProductContext);
  const [starRating, setStarRating] = useState([]);

  useEffect(() => {
    if (loaded) {
      console.log(ratingsScore);
      setStarRating(getRatings(ratingsScore));
    }
  }, [loaded]);

  if (loaded) {
    return (
      <>
        {['100%', '100%', '100%', '40%', '0%'].map((rating, count) => <StarRating key={count} currentRating={rating} currentCount={count} />)}
      </>
    );
  } else {
    return (
      <>
        <div>loading...</div>
      </>
    )
  }
};
// 0 40 62 100
export default StarDisplay;
// starRating
// ['0%', '0%', '0%', '0%', '0%']
// ['100%', '40%', '0%', '0%', '0%']
// ['100%', '100%', '62%', '0%', '0%']
// ['100%', '100%', '100%', '40%', '0%']
// ['100%', '100%', '100%', '100%', '100%']
