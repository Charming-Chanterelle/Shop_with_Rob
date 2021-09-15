/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Component, createContext } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Q&A/App.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

// import productz from './OverviewTESTproductReg.js'; //
// import style from './OverviewTESTstyle.js';

const productContext = createContext();

class productContextProvider extends Component {

    state = {
      product: {},
      product_styles: [], // all styles for this product
      // (needed like this for overview if want overview to
      // easily have the array to choose which style is
      // rendered. Will need Overview to pass currentStyle to Related)
      meta_ratings: {},
    };
  }

  componentDidMount() {
    const randID = Math.ceil(Math.random() * (9 - 0));
    axios.get('/api/products/?count=10')
      .then((products) => {
        const product = products.data[randID];
        console.log(product);
        return [product, product.id];
      })
      .then(([product, ID]) => {
        axios.all([
          axios.get(`/api/products/${ID}/style`),
          axios.get(`/api/reviews/meta/?product_id=${ID}`),
        ])
          .then(axios.spread((data1, data2) => {
            this.setState({
              product, product_styles: data1.data.results, meta_ratings: data2.data,
            });
            console.log('HERE');
          }))
          .catch((err) => {
            console.log('here is error', err);
          });
      })
      .catch((err) => {
        console.log('error in client styles/ratings GET', err);
      });
  }

  render() {
    const { product, product_styles, meta_ratings } = this.state;
    return (
      <div id="app">
        <NavBar />
        <Overview product={product} styles={product_styles} stars={meta_ratings.ratings} />
        <Related show={3} />
        <Outfit show={3} />
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;

// { product !== {} &&
// <Overview product={product} styles={product_styles} stars={meta_ratings.ratings} />}
