import React, { Component } from "react";
import "./LocalHealth.scss";
import { fetchHealthDepts } from "../../apiCalls";
import { loadHealthDepts } from "../../actions";
import { connect } from "react-redux";

class LocalHealth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCounty: null,
    };
  }
  componentDidMount() {
    fetchHealthDepts().then((data) => this.props.loadHealthDepts(data));
  }
  render() {
    console.log(this.props);

    return (
      <div className="local-health-container">
        <h2 className="local-health-header">Local Health Depts</h2>
        <h3 className="">Select your county below:</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    depts: state.healthDepts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadHealthDepts: (healthDepts) => dispatch(loadHealthDepts(healthDepts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocalHealth);
