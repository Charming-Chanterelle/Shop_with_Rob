/* eslint-disable import/extensions */
import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Overview from './Overview.jsx';
import Related from './Related.jsx';
import Questions from './Questions.jsx';
import Ratings from './RatingsList.jsx';

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
      <div>
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
