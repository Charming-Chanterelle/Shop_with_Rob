import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { onSearch, value } = props;

  return (
    <form>
      <span>Search blog posts</span>
      <input
        onSearch={onSearch}
        type="text"
        placeholder={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
