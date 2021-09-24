/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import ProductContextProvider from './contexts/ProductContext.jsx';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
const Related = React.lazy(() => import ('./Related.jsx'))
const Questions = React.lazy(() => import ('./Q&A/App.jsx'))
const Ratings = React.lazy(() => import ('./Ratings.jsx'));
const Outfit = React.lazy(() => import ('./Outfit.jsx'));

function App() {
  return (
    <ProductContextProvider>
git 
      <Suspense fallback={<div>Loading...</div>}>
        <Related show={4} />
        <Outfit show={4} />
        <Questions />
        <Ratings />
      </Suspense>
    </ProductContextProvider>
  );
}

export default App;
