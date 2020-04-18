import React, { Component } from "react";
import './CountyData.scss'


class CountyData extends Component {
  constructor({ deaths, cases, countyPop }) {
    super({ deaths, cases, countyPop });
    this.state = {
      deaths: null,
      cases: null,
      casesSevenDaysAgo: null,
      countyPop: null,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ 
        deaths: nextProps.deaths,
        cases: nextProps.cases,
        countyPop: nextProps.countyPop
    });  
  }
  makeTable = () => {
      if (this.state.countyPop) {
          return (          
        <table>
        <tr>
          <th>Positive Cases</th>
          <th>Fatalities</th>
          <th>County Population</th>
        </tr>
        <tr>
          <td>{this.state.cases}</td>
          <td>{this.state.deaths}</td>
          <td>{this.state.countyPop}</td>
        </tr>
      </table>
          )
      } else {
          return ''
      }
  };
  render() {
    return (
      <div data-testid="county-data-container">
       {this.makeTable()}
      </div>
    );
  }
}

export default CountyData;
