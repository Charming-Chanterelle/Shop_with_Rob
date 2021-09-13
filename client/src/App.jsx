/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
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
    // const { value } = this.state;
    return (
      <div id="app">
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
