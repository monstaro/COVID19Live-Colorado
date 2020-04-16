import React, { Component } from "react";
import "./CountyStats.scss";
import { connect } from "react-redux";

class CountyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCounty: null,
    };
  }
  render() {
    return (
      <div
        className="county-stats-container"
        data-testid="county-stats-container"
      >
        <h2 className="county-stats-header">County Stats</h2>
        <h3 className="county-stats-subheader">Select A County Below</h3>
        <section className="county-picker"></section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counties: state.countiesList,
});

export default connect(mapStateToProps)(CountyStats);
