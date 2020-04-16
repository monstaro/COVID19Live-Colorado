import React from 'react'
import './Header.scss'

const Header = () => {
    return (
    <div className="header-container">
        <p className="title">
            <div className="covid-live">
                CovidLive
            </div>
             <div className="colorado">
                Colorado
            </div>
        </p>
    </div>
    )
}

export default Header