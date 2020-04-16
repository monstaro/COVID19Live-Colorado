import React from 'react'
import './Header.css'

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
            {/* <div className="underline">
                <p>
                ________________________
                </p>
            </div> */}
        </p>
    </div>
    )
}

export default Header