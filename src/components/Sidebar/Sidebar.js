import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import Nav from '../Nav/Nav'

const Sidebar = () => {
    return (
    <div className="sidebar-container">
        <ul className="sidebar-links">
            <NavLink to="/about">
                <li className="about">About</li>
            </NavLink>
            <NavLink to="/staying-protected">
                <li className="staying-protected">Staying Protected</li>
            </NavLink>
            <NavLink to="/local-health">
                <li className="local-health">Find Your County Health Department</li>
            </NavLink>
            <NavLink to="/county-stats">
                <li className="county-stats">Live County Stats</li>
            </NavLink>
            <NavLink to="bookmarks">
                <li className="bookmarked-counties">Bookmarked Counties</li>
            </NavLink>
        </ul>
    </div>
    )
}

export default Sidebar