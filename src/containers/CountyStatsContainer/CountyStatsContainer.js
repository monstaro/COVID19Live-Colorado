import React, { Component } from "react";
import "./CountyStatsContainer.scss";
import { connect } from "react-redux";
import CountyDropdown from '../../components/CountyDropdown/CountyDropdown'
import CountyData from '../../components/CountyData/CountyData'

class CountyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCounty: null,
      selectedCountyDeaths: null
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
      selectedCounty: this.props.counties.find(countyObject => countyObject.FULL_ === county),
      selectedCountyDeaths: this.props.countyDeaths.filter(co => co.county === county.split(' ')[0])
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
          <CountyData countyDeaths={this.state.selectedCountyDeaths}/>
        </div>
      );
    } else {
      return (
        <div data-testid="county-stats-container">
          'Loading...'
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  counties: state.countiesList,
  countyDeaths: state.countyDeaths
});

export default connect(mapStateToProps)(CountyStats);
