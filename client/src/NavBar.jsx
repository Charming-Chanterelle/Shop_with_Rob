import React, { Component } from 'react';
// import SearchBar from './SearchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <nav className="navBar">
        <h1>Shop With Rob</h1>
      </nav>
    );
  }
}

export default NavBar;

// {/* <SearchBar /> */}

//  {/* <div className="nav">
//           <span className="logo">BLOGMODO</span>
//           <span className={this.state.view === 'feed'
//             ? 'nav-selected'
//             : 'nav-unselected'}
//             onClick={() => this.changeView('feed')}>
//             See all Posts
//           </span>
//           <span className="nav-unselected" style={{'cursor': 'pointer'}}onClick={() => this.changeView('create')}>
//             Write a Post
//           </span>
//           <span className="nav-unselected" style={{'cursor': 'pointer'}}onClick={() => this.changeView('admin')}>
//             Admin
//           </span>
//         </div> */}