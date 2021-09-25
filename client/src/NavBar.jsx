/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/extensions
import SearchBar from './SearchBar.jsx';
import { FaShoppingBag, FaRegQuestionCircle } from 'react-icons/fa';

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
          <FaRegQuestionCircle style={{
            paddingTop: 30, paddingLeft: 680, width: 20, height: 20, cursor: "pointer",
          }}
          />
          <FaShoppingBag style={{
            paddingTop: 30, width: 20, height: 20, cursor: "pointer",
          }}
          />
          <SearchBar search={this.search} value={value} />
        </ul>
      </div>
    );
  }
}

export default NavBar;
