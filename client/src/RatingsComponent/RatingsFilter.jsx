/* eslint-disable import/extensions */
import React from 'react';
import * as RC from './RatingsComponentStyledComponent.jsx';

const RatingsFilter = ({ totalRatings, handleFilterData }) => {
  const onDropDownSelect = (event) => {
    event.preventDefault();
    handleFilterData(event.target.value);
  };

  return (
    <>
      <RC.RatingsFilterLabel htmlFor="ratingsSearch">
        {totalRatings}
        <RC.RatingsFilterText> reviews, sorted by</RC.RatingsFilterText>
      </RC.RatingsFilterLabel>
      <RC.RatingsFilterContainer
        name="search"
        id="ratingsSearch"
        form="ratings"
        onChange={(event) => onDropDownSelect(event)}
      >
        <RC.RatingsFilterDropdown value="relevant">
          relevant
        </RC.RatingsFilterDropdown>
        <RC.RatingsFilterDropdown value="helpful">helpful</RC.RatingsFilterDropdown>
        <RC.RatingsFilterDropdown value="newest">newest</RC.RatingsFilterDropdown>
      </RC.RatingsFilterContainer>
    </>
  );
};

export default RatingsFilter;
