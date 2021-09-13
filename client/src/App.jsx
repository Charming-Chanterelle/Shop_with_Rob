/* eslint-disable import/extensions */
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Questions.jsx';
import Ratings from './Ratings.jsx';
import Outfit from './Outfit.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: 'hello worlddddd',
    };
  }

  render() {
    // const { value } = this.state;
    return (
      <div id="app">
        Hello
        <NavBar />
        <Overview />
        <Related />
        <Outfit />
        <Questions />
        <Ratings />
      </div>
    );
  }
}

export default App;
