import React, { Component } from "react";
import "./CountyData.scss";

class CountyData extends Component {
  makeTable = (props) => {
    if (this.props.countyPop) {
      return (
        <div>
          <h4>{this.props.countyName}</h4>
          <table>
            <thead>
              <tr>
                <th>Positive Cases</th>
                <th>Fatalities</th>
                <th>County Population</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>{this.props.cases}</td>
                <td>{this.props.deaths}</td>
                <td>{this.props.countyPop}</td>
              </tr>
            </thead>
          </table>
        </div>
      );
    } else {
      return "";
    }
  };
  render() {
    return (
      <div
        data-testid="county-data-container"
        className="county-data-container"
      >
        {this.makeTable()}
      </div>
    );
  }
}

export default CountyData;
