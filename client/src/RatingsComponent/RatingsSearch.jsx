import React from 'react';

const RatingsSearch = () => {
  return (
    <>
      <label htmlFor="ratingsSearch">248 reviews, sorted by </label>
        <select name="search" id="ratingsSearch" form="ratings">
          <option value="relevance">relevance</option>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
        </select>
    </>
  )
};

export default RatingsSearch;
