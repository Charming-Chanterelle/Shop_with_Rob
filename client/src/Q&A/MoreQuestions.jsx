import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid white;
  padding: 1em;
  width: 200px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
`;

const MoreQuestions = ({ noQuestions, incrementQuestionCount }) => (
  <div>
    {noQuestions ? null : <Button type="submit" onClick={incrementQuestionCount}>MORE QUESTIONS</Button>}
  </div>

);

export default MoreQuestions;
