import React, { useState } from 'react';
import styled from 'styled-components';
import QandAitems from './QandAitems.jsx';
import SearchBar from './SearchBar.jsx';
import LoadMore from './LoadMore.jsx';
import AddAquestion from './AddAquestion.jsx';

const Container = styled.div`
  width: 700px;
  margin: auto;
`;

const App = () => {
  const [value] = useState('HAVE A QUESTION? SEARCH FOR ANSWERS... ');

  return (
    <Container>
      <h1 className="bigText">Questions and Answers</h1>
      <SearchBar value={value} />
      <QandAitems />
      <LoadMore />
      <AddAquestion />
    </Container>
  );
};

export default App;
