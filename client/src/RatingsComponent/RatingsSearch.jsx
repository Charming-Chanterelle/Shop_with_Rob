import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';

const RatingsSearch = ({ totalRatings, handleFilterData }) => {
  const { ratingsScore } = useContext(ProductContext);
  const { numberOfRatings } = ratingsScore;

  const onDropDownSelect = (event) => {
    event.preventDefault();
    handleFilterData(event.target.value);
  };

  return (
    <>
      <label htmlFor="ratingsSearch">
        {numberOfRatings}
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
};

export default RatingsSearch;
