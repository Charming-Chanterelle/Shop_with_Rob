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

  componentDidMount() {
    const randID = Math.ceil(Math.random() * (10 - 0));
    axios.get('/api/products/?count=10')
      .then((results) => {
        this.setState({
          product: results.data[randID],
        });
        axios.get(`/api/products/${results.data[randID].id}/style`)
          .then((results1) => {
            this.setState({
              product_style: results1.data.results.filter((x) => x['default?'] === true),
            });
          })
          .catch((err) => {
            console.log('This is from Component Did Mount STYLE GET in the App Component', err);
          });
        axios.get(`/api/reviews/meta/?product_id=${results.data[randID].id}`)
          .then((results2) => {
            this.setState({
              meta_ratings: results2.data,
            });
          })
          .catch((err) => {
            console.log('This is from Component Did Mount RATINGS GET in the App Component', err);
          });
      })
      .catch((err) => {
        console.log('This is from Component Did Mount PRODUCT GET in the App Component', err);
      });
  }

  render() {
    const { product, product_style, meta_ratings } = this.state;
    console.log(product, product_style, meta_ratings);
    return (
      <div id="app">
        <NavBar />
        <Overview product={product} currentStyle={product_style} stars={meta_ratings.ratings} />
        <Related show={3} />
        <Outfit show={3}/>
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
