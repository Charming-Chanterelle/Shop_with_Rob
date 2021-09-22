/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React from 'react';
import ProductContextProvider from './contexts/ProductContext.jsx';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Q&A/App.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

function App() {
  return (
    <ProductContextProvider>
      <NavBar />
      <Overview />
      <Related show={4} />
      <Outfit show={4} />
      {/* <Questions /> */}
      <Ratings />
    </ProductContextProvider>
  );
}

export default App;
