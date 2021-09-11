import React from 'react';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Search our store',
    };
    this.onSearch = this.OnSearch.bind(this);
  }

  onSearch(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <ul id="nav">
          <li><a href="www.google.com">SHOP WITH ROB.</a></li>
          <SearchBar onSearch={this.onSearch} value={value} />
        </ul>
      </div>
    );
  }
}

export default NavBar;
