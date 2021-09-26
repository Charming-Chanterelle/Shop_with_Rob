/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './contexts/ProductContext.jsx';
import StarRating from './StarRating.jsx';

const getRatings = ({ avgRating }, id) => {
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
  if (remaining > 0 && remaining <= 0.25) {
    ratingsStorage.push('0%');
  } else if (remaining > 0.25 && remaining <= 0.50) {
    ratingsStorage.push('40%');
  } else if (remaining > 0.50 && remaining < 1) {
    ratingsStorage.push('62%');
  }

  for (let j = 0; j < maxRating; j++) {
    ratingsStorage.push('0%');
  }
  return ratingsStorage;
};

const StarDisplay = ({ stars }) => {
  const { ratingsScore, loaded, productID } = useContext(ProductContext);
  const [starRating, setStarRating] = useState([]);
  const [starAttribute, setStarAttribute] = useState({ width: '15', height: '15' });

  useEffect(() => {
    setStarRating(getRatings(ratingsScore, productID));
    setStarAttribute(stars);
  }, [ratingsScore, productID]);

  return (
    <>
      {starRating.map((rating, count) => (
        <StarRating
          key={count}
          currentRating={rating}
          currentCount={count}
          starProp={starAttribute}
        />
      ))}
    </>
  );
};

export default StarDisplay;
