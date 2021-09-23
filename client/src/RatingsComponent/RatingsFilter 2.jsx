/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import * as RC from './RatingsComponentStyledComponent.jsx';

const RatingsFilter = ({ handleFilterData }) => {
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
        <RC.RatingsFilterLabel htmlFor="ratingsSearch">
          {totalRating}
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
  }
  return null;
};

export default RatingsFilter;
