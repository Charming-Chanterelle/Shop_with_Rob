import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import RatingsDisplay from './Individual_Tile/RatingsDisplay.jsx';

const uniqueKey = () => {
  let key = '';
  const bank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '0','1', '2','3','4','5','6','7','8','9'];
  const bankLen = bank.length;
  for (let i = 0; i < 13; i++) {
    const randID = Math.ceil(Math.random() * (bankLen - 0));
    key += bank[randID];
  };
  return key;
};

const RatingsContent = ({ ratingsList, productID, onUpdateReview }) => {
  return (
    <>
      {ratingsList.map((rating, count) => <RatingsDisplay key={rating.reviewer_name.concat(rating.review_id, productID, uniqueKey())} ratingList={rating} onUpdateReview={onUpdateReview} starKey={rating.reviewer_name.concat(rating.review_id, productID, uniqueKey())}/>)}
    </>
  );
};

export default RatingsContent;
