import React, { Component } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: null,
    };
  }
  addActiveClass = (e) => {
    this.setState({
      currentPage: e.target.id,
    });
  };
  determineIfActive = (section) => {
    if (section === this.state.currentPage) {
      return section + " active-link";
    } else {
      return section + " inactive-link";
    }
  };
  render() {
    return (
      <div className="sidebar-container" data-testid="sidebar-container">
        <ul className="sidebar-links">
          <NavLink to="/about">
            <li
              onClick={(e) => this.addActiveClass(e)}
              id="about"
              className={this.determineIfActive("about")}
              data-testid={this.determineIfActive("about")}
            >
              About
            </li>
          </NavLink>
          <NavLink to="/staying-protected">
            <li
              onClick={(e) => this.addActiveClass(e)}
              id="staying-protected"
              className={this.determineIfActive("staying-protected")}
              data-testid={this.determineIfActive("staying-protected")}
            >
              Staying Protected
            </li>
          </NavLink>
          <NavLink to="/local-health">
            <li
              onClick={(e) => this.addActiveClass(e)}
              id="local-health"
              className={this.determineIfActive("local-health")}
              data-testid={this.determineIfActive("local-health")}
            >
              Your County Health Department
            </li>
          </NavLink>
          <NavLink to="/county-stats">
            <li
              onClick={(e) => this.addActiveClass(e)}
              id="county-stats"
              className={this.determineIfActive("county-stats")}
              data-testid={this.determineIfActive("county-stats")}
            >
              Live County Stats
            </li>
          </NavLink>
          <NavLink to="bookmarks">
            <li
              onClick={(e) => this.addActiveClass(e)}
              id="bookmarked-counties"
              className={this.determineIfActive("bookmarked-counties")}
              data-testid={this.determineIfActive("bookmarked-counties")}
            >
              Bookmarked Counties
            </li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
