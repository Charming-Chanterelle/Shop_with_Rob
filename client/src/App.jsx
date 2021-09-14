/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaThumbsUp } from '@fortawesome/free-brands-svg-icons';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Q&A/App.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {

    return (
      <div id="app">
        <NavBar />
        <Overview />
        <Related show={3} />
        <Outfit show={3}/>
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
