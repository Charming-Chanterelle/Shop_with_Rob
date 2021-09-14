import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = ({ value }) => (
  <form>
    <input
      type="text"
      placeholder={value}
    />
    <button type="submit">Search</button>
  </form>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SearchBar;
