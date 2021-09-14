/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Questions.jsx';
import Ratings from './Ratings.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="app">
        Hello
        <NavBar />
        <Overview />
        <Related />
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
