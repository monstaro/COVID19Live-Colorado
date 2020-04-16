import React, { Component } from "react";
import "./CountyStats.scss";
import { fetchCounties } from "../../apiCalls";
import { connect } from 'react-redux';
import { loadCounties } from './actions';

class CountyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCounty: null,
    };
  }
  componentDidMount() {
    fetchCounties()
        .then(res => res.json())
        .then(data => console.log(data.features.map(entries => {
            return entries.properties
        })))
  }
  render() {
    return (
      <div className="county-stats-container">
        <h2 className="county-stats-header">County Stats</h2>
        <h3 className="county-stats-subheader">Select A County Below</h3>

        <section className="county-picker">
        </section>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
    loadCounties: counties => dispatch(loadCounties(counties))
})
export default connect(null, mapDispatchToProps)(CountyStats)
// .then(res => res.json())
//         .then(data => {
//             loadCounties(
//                 data.features.map(entries => {
//                 return entries.properties
//             }))
//         })