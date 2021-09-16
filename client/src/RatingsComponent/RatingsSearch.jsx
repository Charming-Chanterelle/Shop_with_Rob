import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';

const RatingsSearch = ({ handleFilterData }) => {
  const { ratingsScore, loaded } = useContext(ProductContext);
  const [totalRating, setTotalRating] = useState(0);

  useEffect(() => {
    if (loaded) {
      setTotalRating(ratingsScore.numberOfRatings);
    }
  }, [loaded]);


  const onDropDownSelect = (event) => {
    event.preventDefault();
    handleFilterData(event.target.value);
  };

  if (loaded) {
    return (
      <>
        <label htmlFor="ratingsSearch">
          {totalRating}
          <span> reviews, sorted by </span>
        </label>
        <select
          name="search"
          id="ratingsSearch"
          form="ratings"
          onChange={(event) => onDropDownSelect(event)}
        >
          <option value="relevant">relevant</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
      </>
    );
  } else {
    return (
      <div>loading...</div>
    )
  }
};

export default RatingsSearch;
