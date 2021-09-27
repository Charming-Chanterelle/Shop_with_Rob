/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { useRef, Suspense } from 'react';
import ProductContextProvider from './contexts/ProductContext.jsx';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
<<<<<<< HEAD

const Questions = React.lazy(() => import('./Q&A/App.jsx'));
=======
const Questions = React.lazy(() => import ('./Q&A/App.jsx'));
>>>>>>> b6b84519e1212244fd04705cead41c58bf1984fe
const Ratings = React.lazy(() => import ('./Ratings.jsx'));


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
      <Suspense fallback={<div>Loading...</div>}>
        <Questions />
        <Ratings reference={el2}/>
      </Suspense>
    </ProductContextProvider>
  );
}

export default App;
