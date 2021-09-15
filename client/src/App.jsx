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
    console.log(randID);

    axios.get('/api/products/?count=10')
      .then((results) => {
        this.setState({
          product: results.data[randID],
        })
        axios.get(`/api/products/${this.state.product.id}/style`)
          .then((results) => {
            this.setState({
              product_style: results.data.results,
            })
          })
          .catch((err) => {
            console.log('This is from Component Did Mount in the App Component', err);
          })
        axios.get(`/api/reviews/meta/?product_id=${this.state.product.id}`)
          .then((results) => {
            this.setState({
              meta_ratings: results.data,
            })
          })
          .catch((err) => {
            console.log('This is from Component Did Mount in the App Component', err);
          });
      })
      .catch((err) => {
        console.log('This is from Component Did Mount in the App Component', err);
      });
  }

  render() {
    const { product, product_style, meta_ratings } = this.state;
    // console.log(product, product_style , meta_ratings);

    return (
      <div id="app">
        <NavBar />
        <Overview />
        <Related show={3} />
        <Outfit show={3} />
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
