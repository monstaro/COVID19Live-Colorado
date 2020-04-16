import React from 'react'
import './Welcome.scss'

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h2 className="welcome-header">
                Welcome to CovidLive Colorado
            </h2>
            <section className="welcome-description">
                <p>
                    Our mission is to bring at-risk residents of Colorado the most up-to-date information for their county.
                </p>
                Here you can find tips to stay protected, locate your local health department, and view live COVID-19 stats for any county in Colorado.
            </section>
        </div>
    )
}

export default Welcome