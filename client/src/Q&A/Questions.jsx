import React from 'react';
import styled from 'styled-components';

const QuestionsContainer = styled.div`
position: relative;
top: 10px;
font-size: 1em;
font-weight: bolder;
text-transform: uppercase;
`;

const Questions = () => (
  <div>

    <QuestionsContainer>
      <span><h2>Q:</h2></span>
      <p>How do you center a div</p>
    </QuestionsContainer>

  </div>
);

export default Questions;
