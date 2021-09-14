/* eslint-disable import/extensions */
import React from 'react';
import SearchBar from './SearchBar.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search our store',
    };
    this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <ul id="nav">
          <h1 className="bigText"> SHOP_WITH_ROB;</h1>
          <SearchBar search={this.search} value={value} />
        </ul>
      </div>
    );
  }
}

export default NavBar;
