import React, { Component } from 'react';
// import SearchBar from './SearchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: '',
    };
  }

  render() {
    return (
      <div className="nav">
        <span className="logo">BLOGMODO</span>
        {/* <span className={this.state.view === 'feed'
          ? 'nav-selected'
          : 'nav-unselected'}
          onClick={() => this.changeView('feed')}> */}
          See all Posts </span>
      </div>
    );
  }
}

export default NavBar;

// {/* <SearchBar /> */}
