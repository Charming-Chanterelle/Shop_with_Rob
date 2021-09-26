/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import RatingsDisplay from './Individual_Tile/RatingsDisplay.jsx';

const uniqueKey = () => {
  let key = '';
  const bank = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '3', '4', '5', '6', '7', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '8', '9', '!', '@', '$', '#', '%', '^', '*', 'a', 'b', 'c', 'd', 'e', 'f'];
  const bankLen = bank.length;
  for (let i = 0; i < 15; i++) {
    const randID = Math.ceil(Math.random() * (bankLen - 0));
    key += bank[randID];
  }
  return key;
};

const RatingsContent = ({ ratingsList, productID, onUpdateReview }) => (
  <>
    {ratingsList.map((rating) => (
      <RatingsDisplay
        key={rating.reviewer_name.concat(rating.review_id, productID, uniqueKey())}
        ratingList={rating}
        onUpdateReview={onUpdateReview}
        starKey={rating.reviewer_name.concat(rating.review_id, productID, uniqueKey(), 'individualtile')}
      />
    ))}
  </>
);

export default RatingsContent;
