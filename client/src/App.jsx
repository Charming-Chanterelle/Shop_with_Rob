import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hello worlddddd',
    };
  }

  render() {
    const { value } = this.state;
    return <div>{value}</div>;
  }
}

export default App;
