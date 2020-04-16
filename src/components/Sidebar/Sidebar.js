import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
    <div className="sidebar-container">
        <ul className="sidebar-links">
            <li className="about">About</li>
            <li className="staying-protected">Staying Protected</li>
            <li className="local-health">Find Your County Health Department</li>
            <li className="county-stats">Live County Stats</li>
            <li className="bookmarked-counties">Bookmarked Counties</li>
        </ul>
    </div>
    )
}

export default Sidebar