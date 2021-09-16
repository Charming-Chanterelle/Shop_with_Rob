import React from 'react';
import styled from 'styled-components';

const AddAquestion = () => {
  const ButtonStyling = styled.button`
  padding: 10px;
  `;
  return (
    <ButtonStyling>
      <button type="button" onClick={(e) => alert('In the future it will pop up a modal')}> Add A Question </button>
    </ButtonStyling>
  );
};

export default AddAquestion;
