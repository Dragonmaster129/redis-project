import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="left">
          <h1>
            <NavLink to="/">Redis Link Shortener</NavLink>
          </h1>
        </div>
        <div className="center"></div>
        <div className="right">
          <NavLink to="all-links">All Links</NavLink>
        </div>
      </div>
    );
  }
}
