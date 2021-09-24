/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import StarRating from '../StarRating.jsx';
import { ProductContext } from '../contexts/ProductContext.jsx';

const getRatings = (avgRating) => {
  const ratings = Number(avgRating);
  let ratingsStorage = [];

  if (ratings === 0) {
    ratingsStorage = ['0%', '0%', '0%', '0%', '0%'];
    return ratingsStorage;
  }
  // 3
  const remaining = 5 - ratings;

  for (let i = 0; i < ratings; i++) {
    ratingsStorage.push('100%');
  }
  // when min rating = 5 then the ratings should be 5.
  if (ratings === 5) {
    return ratingsStorage;
  }
  for (let j = 0; j < remaining; j++) {
    ratingsStorage.push('0%');
  }
  return ratingsStorage;
};

const RatingsStarDisplay = ({ id, stars, starRatings }) => {
  const { productID } = useContext(ProductContext);
  const [starRating, setStarRating] = useState([]);
  const [starAttribute, setStarAttribute] = useState({ width: '15', height: '15' });
  const [ratingsID, setRatingsID] = useState('');

  useEffect(() => {
    setStarRating(getRatings(starRatings));
    setStarAttribute(stars);
    setRatingsID(id);
  }, [productID]);

    return (
      <>
        {starRating.map((rating, count) => <StarRating key={count + ratingsID} currentRating={rating} currentCount={count + ratingsID} starProp={starAttribute} />)}
      </>
    );
};
// 0 40 62 100
export default RatingsStarDisplay;
// starRating
// ['0%', '0%', '0%', '0%', '0%']
// ['100%', '40%', '0%', '0%', '0%']
// ['100%', '100%', '62%', '0%', '0%']
// ['100%', '100%', '100%', '40%', '0%']
// ['100%', '100%', '100%', '100%', '100%']
