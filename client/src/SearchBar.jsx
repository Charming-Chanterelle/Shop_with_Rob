import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const { search, value } = props;

  return (
    <form style={{ float: "right", paddingLeft: 10 }}>
      <input
        className="imgFormat"
        onChange={search}
        type="text"
        placeholder={value}
      />
      <button type="submit" style={{ paddingTop: 0, paddingBottom: 2, marginTop: 25 }}>&#x1F50D;</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
