import React from 'react';
import styled from 'styled-components';

const LoadMore = () => {
  const ButtonStyling = styled.button`
  padding: 10px;
  `;
  return (
    <ButtonStyling>
      <button type="button" onClick={(e) => alert('In the future it will load 2 more reviews')}> Add A Question </button>
    </ButtonStyling>
  );
};

export default LoadMore;
