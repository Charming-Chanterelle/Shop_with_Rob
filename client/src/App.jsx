/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import ProductContextProvider from './contexts/ProductContext.jsx';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Q&A/App.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

function App() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  return (
    <ProductContextProvider>
      <NavBar />
      <Overview reference={el1} jumpClick={() => scrollToDiv(el2)} />
      <Related show={4} />
      <Outfit show={4} />
      <Questions />
      <Ratings reference={el2} />
    </ProductContextProvider>
  );
}

export default App;
