/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Suspense } from 'react';
import ProductContextProvider from './contexts/ProductContext.jsx';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
// const S = React.lazy(() => import ('./Q&A/App.jsx'))
const Ratings = React.lazy(() => import ('./Ratings.jsx'));

function App() {
  return (
    <ProductContextProvider>
      <NavBar />
      <Overview />
      <Related show={4} />
      <Outfit show={4} />
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Questions /> */}
        {/* <Ratings /> */}
      </Suspense>
    </ProductContextProvider>
  );
}

export default App;
