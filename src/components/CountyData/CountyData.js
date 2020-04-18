import React, { Component } from "react";
import "./CountyData.scss";

class CountyData extends Component {
  makeTable = () => {
    if (this.props.countyPop) {
      return (
        <div>
          <h4>{this.props.countyName}</h4>
          <table>
            <tr>
              <th>Positive Cases</th>
              <th>Fatalities</th>
              <th>County Population</th>
            </tr>
            <tr>
              <td>{this.props.cases}</td>
              <td>{this.props.deaths}</td>
              <td>{this.props.countyPop}</td>
            </tr>
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
