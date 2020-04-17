import React, { Component } from "react";
import "./CountyStats.scss";
import { connect } from "react-redux";
import CountyDropdown from '../../components/CountyDropdown/CountyDropdown'

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
  selectCounty = (county) => {
    this.setState({
      selectedCounty: this.props.counties.find(countyObject => countyObject.FULL_ === county)
    })
  }
  render() {
    if (this.props.counties.length) {
      return (
        <div
          className="county-stats-container"
          data-testid="county-stats-container"
        >
          <h2 className="county-stats-header">County Stats</h2>
          <h3 className="county-stats-subheader">Select A County Below</h3>
          <section className="county-picker"></section>
          <CountyDropdown countyNames={this.getCountyNames()} selectCounty={(county) => this.selectCounty(county)}/>
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
