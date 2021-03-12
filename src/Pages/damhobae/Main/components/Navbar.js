import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="navBox">
          <a>Westagram</a>
          <div className="searchBox">
            <input type="texit" placeholder="검색" />
            <i className="fas fa-search"></i>
          </div>
          <div className="nav-icon">
            <i class="far fa-compass"></i>
            <i className="far fa-paper-plane"></i>
            <i class="far fa-heart"></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
