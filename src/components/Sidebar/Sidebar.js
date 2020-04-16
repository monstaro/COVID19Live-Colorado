import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container" data-testid="sidebar-container">
      <ul className="sidebar-links">
        <NavLink to="/about">
          <li className="about" data-testid="about">About</li>
        </NavLink>
        <NavLink to="/staying-protected">
          <li className="staying-protected" data-testid="staying-protected">Staying Protected</li>
        </NavLink>
        <NavLink to="/local-health">
          <li className="local-health" data-testid="local-health">Your County Health Department</li>
        </NavLink>
        <NavLink to="/county-stats">
          <li className="county-stats" data-testid="county-stats">Live County Stats</li>
        </NavLink>
        <NavLink to="bookmarks">
          <li className="bookmarked-counties" data-testid="bookmarked-counties">Bookmarked Counties</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
