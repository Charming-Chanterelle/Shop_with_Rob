import React from 'react';
import styled from 'styled-components';

const QuestionsContainer = styled.div`
position: relative;
top: 10px;
font-size: 1em;
font-weight: bolder;
text-transform: uppercase;
`;

const Interactions = styled.div`
  display: flex;
  flex-direction: row;
  font-size: small;
  text-align: right;
  position: relative;
  left: 470px;
  top: -7px;
  text-transform: uppercase;
`;

const Questions = () => (
  <div>
    <QuestionsContainer>
      <span><h2>Q:</h2></span>
      <p>How do you center a div</p>
    </QuestionsContainer>
    <Interactions>
      <div>
        Helpful?&nbsp;
      </div>
      <span>
        YES (10)
        <strong>&nbsp;</strong>
      </span>
      <span>
        || No (2)
      </span>
    </Interactions>
  </div>
);

export default Questions;
