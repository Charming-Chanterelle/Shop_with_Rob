import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { search, value } = props;

  return (
    <form>
      <input
        onChange={search}
        type="text"
        placeholder={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
