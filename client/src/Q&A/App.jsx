/* eslint-disable max-len */
import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Search from './Search.jsx';
import QandAContainer from './QandAContainer.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import QuestionModal from './QuestionModal.jsx';
import { ProductContext } from '../contexts/ProductContext.jsx'

const Container = styled.div`
padding-left: 200px;
margin: auto;
background-color: #fffefa;
width: 750px;
height: auto;
padding-right: 672px;
border-radius: 5px;
border: 1px solid #d3d3d3;
box-shadow: 2px 2px 2px 1px #d3d3d3;
margin-top: 100px;

font-family: 'Poppins', sans-serif;
padding-right: 1000px;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 1em;
  width: 200px;
  margin: 0px 10px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const Title = styled.div`
position: absolute;
top: 2615px;
padding-left: 210px;
left: 0;
font-family: 'Poppins', sans-serif;
`;

const App = () => {
  const { productID } = useContext(ProductContext);
  const [questions, setQuestions] = useState([]);
  const [questionShow, setQuestionShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [productName, setProductName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [counter, setCounter] = useState(2);
  const [noQuestions, setNoQuestions] = useState(false);

  const getQuestions = () => (
    axios.get('/api/qa/questions', {
      params: {
        product_id: productID,
      },
    })
      .then((response) => {
        setQuestions(response.data.results);
      })
      .catch((error) => (
        error
      ))
  );

  const getProductInfo = () => {
    axios.get(`/api/products/${productID}`, {
      params: {
        product_id: productID,
      },
    })
      .then((response) => {
        setProductName(response.data.name);
      });
  };

  useEffect(getQuestions, [productID]);
  useEffect(getProductInfo, [productID]);

  const incrementQuestionCount = () => {
    let newCounter;
    if (counter < (questions.length - 2)) {
      newCounter = counter + 2;
    } else {
      newCounter = questions.length;
      setNoQuestions(true);
    }
    setCounter(newCounter);
  };

  const searchQuestions = () => {
    setSearchResults([]);
    const results = new Set();
    questions.forEach((question) => {
      if (question.question_body.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.add(question);
      }
    });
    setSearchResults(Array.from(results));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      searchQuestions();
    } else if (event.target.value.length < 3) {
      setSearchResults([]);
    }
  };

  return (
    <Container>
      <Title>
        <h1 className="bigText"><strong>Questions and Answers.</strong></h1>
      </Title>
      <Search searchTerm={handleSearchTerm} searchQuestions={searchQuestions} questions={questions} />
      <QandAContainer questions={searchResults.length ? searchResults : questions} productName={productName} counter={counter} />
      <Buttons>
        <MoreQuestions noQuestions={noQuestions} incrementQuestionCount={incrementQuestionCount} />
        <Button type="submit" onClick={() => setQuestionShow(true)}>ADD A QUESTION + </Button>
      </Buttons>
      <QuestionModal onClose={() => setQuestionShow(false)} show={questionShow} productName={productName} productId={productID} />
    </Container>
  );
};

export default App;
