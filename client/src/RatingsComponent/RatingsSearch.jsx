import React from 'react';

const RatingsSearch = ({ totalRatings, handleFilterData }) => {
  const onDropDownSelect = (event) => {
    event.preventDefault();
    handleFilterData(event.target.value);
  };

  return (
    <>
      <label htmlFor="ratingsSearch">
        {totalRatings}
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
