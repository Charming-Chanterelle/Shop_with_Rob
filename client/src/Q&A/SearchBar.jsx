import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = ({ value, search, submited }) => {
  const Input = styled.input`
  border: 1px solid #525252;
  padding: 1em;
  width: 700px;
  color: #525252;
`;
  return (

    <div>
      <form>
        <Input placeholder={value} onChange={search} onSubmit={submited}/>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  submited: PropTypes.func.isRequired,
};

export default SearchBar;
