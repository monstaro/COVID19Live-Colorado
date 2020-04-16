import React, { Component } from 'react'
import './LocalHealth.scss'
import { fetchHealthDepts } from '../../apiCalls'
import { loadHealthDepts } from '../../actions'
import { connect } from 'react-redux'

class LocalHealth extends Component {
    componentDidMount() {
        fetchHealthDepts()
        .then(data => this.props.loadHealthDepts(data))
    }
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

const mapDispatchToProps = dispatch => ({
    loadHealthDepts: healthDepts => dispatch(loadHealthDepts(healthDepts))
})

export default connect(null, mapDispatchToProps)(LocalHealth)