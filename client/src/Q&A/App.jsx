/* eslint-disable import/extensions */
import React, { useState } from 'react';
import styled from 'styled-components';
import QandAitems from './QandAitems.jsx';
import SearchBar from './SearchBar.jsx';
import LoadMore from './LoadMore.jsx';
import AddAquestion from './AddAquestion.jsx';

const Container = styled.div`
  width: 700px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ButtonSpaceing = styled.button`
margin-left: 10px;
`;

const App = () => {
  const [value] = useState('HAVE A QUESTION? SEARCH FOR ANSWERS... ');
  const search = useState('');
  const yesCounter = useState(0);
  const noCounter = useState(0);

  const searchValue = (event) => {
    event.preventDefault();
    search(event.target.value);
  };
  const submited = (event) => {
    event.preventDefault();
    const val = event.target.value;
    alert(`this is what was submited ${val}`);
    search('');
  };
  return (
    <Container>
      <h1 className="bigText">Questions and Answers</h1>
      <SearchBar value={value} onChange={searchValue} submited={submited} />
      <QandAitems yesCounter={yesCounter} noCounter={noCounter} />
      <LoadMore />
      <ButtonSpaceing>
        <AddAquestion />
      </ButtonSpaceing>
    </Container>
  );
};

export default App;
