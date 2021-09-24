/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/extensions
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
        <ul id="nav" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <h1 className="bigText" style={{ marginLeft: 10 }}> SHOP_WITH_ROB;</h1>
          <SearchBar search={this.search} value={value} />
        </ul>
      </div>
    );
  }
}

export default NavBar;
