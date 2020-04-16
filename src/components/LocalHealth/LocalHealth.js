import React, { Component } from 'react'
import './LocalHealth.scss'

class LocalHealth extends Component {
    render() {
        return (
            <div className="local-health-container">
                <h2 className="local-health-header">
                    Local Health Depts
                </h2>
                <h3 className="">
                    Select your county below:
                </h3>
            </div>
        )
    }
}

export default LocalHealth;