/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Q&A/App.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      product_style: [],
      meta_ratings: {},
    };
  }

  async componentDidMount() {
    const randID = Math.ceil(Math.random() * (9 - 0));

    axios.get('/api/products/?count=10')
      .then((products) => {
        const product = products.data[randID];
        this.setState({ product });
        return product.id;
      })
      .then((ID) => {
        axios.get(`/api/products/${ID}/style`)
          .then((styles) => {
            this.setState({ product_style: styles.data.results.filter((x) => x['default?'] === true) });
          })
          .catch((err) => {
            console.log('error in client style GET', err);
          });
        axios.get(`/api/reviews/meta/?product_id=${ID}`)
          .then((ratings) => {
            this.setState({ meta_ratings: ratings.data });
          })
          .catch((err) => {
            console.log('error in client ratings GET', err);
          });
      })
      .catch((err) => {
        console.log('error in client product GET', err);
      });
  }

  render() {
    const { product, product_style, meta_ratings } = this.state;
    return (
      <div id="app">
        <NavBar />
        {console.log(product, product_style, meta_ratings)}
        <Overview product={product} currentStyle={product_style} stars={meta_ratings.ratings} />
        <Related show={3} />
        <Outfit show={3} />
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
