import React, { Component } from "react";
import "./CountyStatsContainer.scss";
import { connect } from "react-redux";
import CountyDropdown from '../../components/CountyDropdown/CountyDropdown'
import CountyData from '../../components/CountyData/CountyData'
import { saveBookmark } from '../../actions';

class CountyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCounty: null,
      selectedCountyDeaths: null,
      deaths: null,
      cases: null,
      countyPop: null
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
    console.log(this.props.counties.find(countyObject => countyObject.FULL_ === county))
    this.setState({
      selectedCounty: this.props.counties.find(countyObject => countyObject.FULL_ === county),
      countyName: this.props.counties.find(countyObject => countyObject.FULL_ === county).FULL_ + ':',
      deaths: this.returnCurrentCountyInfo(county),
      cases: this.props.counties.find(countyObject => countyObject.FULL_ === county).County_Pos_Cases,
      countyPop: this.props.counties.find(countyObject => countyObject.FULL_ === county).County_Population
    })
  }
  returnCurrentCountyInfo(county) {
      let a = this.props.countyDeaths.filter(co => co.county === county.split(' ')[0])
      let b = a[a.length - 1]
      if (b) {
        return parseInt(b.deaths)
      } else {
        return 0
      }
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
          {this.state.countyName}
          <CountyData
             deaths={this.state.deaths || 0} 
             cases={this.state.cases || 0}
             countyPop={this.state.countyPop || 0}
             />
            &hearts; <button onClick={() => this.props.saveBookmark(this.state.selectedCounty)}>fave</button>Bookmark This County
        </div>
      );
    } else {
      return (
        <div className="county-stats-container" data-testid="county-stats-container">
          <h2 className="county-stats-header">County Stats</h2>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  counties: state.countiesList,
  countyDeaths: state.countyDeaths
});

const mapDispatchToProps = (dispatch) => ({
  saveBookmark: (bookmark) => dispatch(saveBookmark(bookmark))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountyStats);
