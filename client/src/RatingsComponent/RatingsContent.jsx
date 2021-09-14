import React from 'react';
import RatingsDisplay from './RatingsDisplay.jsx';


const RatingsContent = ({ ratingsList }) => {

  return (
    <>
      {ratingsList.map(rating => <RatingsDisplay key={rating.body} ratingList={rating} />)}
    </>
  )


};

export default RatingsContent;

// {results.map(result => <RatingsDisplay key={result.review_id} reviews={result} />)}
