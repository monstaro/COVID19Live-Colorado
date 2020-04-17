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
  getCountyNames = () => {
    let counties
    if(this.props.counties.length) {
      counties = this.props.counties.map(county => {
        return county.FULL_
      })
    }
    return counties
  }
  render() {
    if (this.props.counties.length) {
      console.log(this.getCountyNames())
      return (
        <div
          className="county-stats-container"
          data-testid="county-stats-container"
        >
          <h2 className="county-stats-header">County Stats</h2>
          <h3 className="county-stats-subheader">Select A County Below</h3>
          <section className="county-picker"></section>
          <input type="text" className="county-stats-input" placeholder="Type Your County Here">
          </input>
          <select id="counties">
            <option value={this.getCountyNames()}></option>
            </select>
        </div>
      );
    } else {
      return (
        'Loading...'
      )
    }
  }
}

const mapStateToProps = (state) => ({
  counties: state.countiesList,
});

export default connect(mapStateToProps)(CountyStats);
