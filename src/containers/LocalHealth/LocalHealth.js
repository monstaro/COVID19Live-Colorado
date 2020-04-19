import React, { Component } from "react";
import "./LocalHealth.scss";
import { fetchHealthDepts } from "../../apiCalls";
import { loadHealthDepts } from "../../actions";
import { connect } from "react-redux";
import CountyDropdown from "../../components/CountyDropdown/CountyDropdown";

class LocalHealth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: null,
      firstDropdownDisabled: false,
    };
  }
  componentDidMount = () => {
    fetchHealthDepts()
      .then((data) => this.props.loadHealthDepts(data))
      .catch((err) => console.error(err.message));
  };
  getCountyNames = () => {
    let counties;
    if (this.props.depts.length) {
      counties = this.props.depts.map((county) => {
        return county.name;
      });
    }
    return counties;
  };
  selectCounty = (county) => {
    if (county !== "default") {
      this.setState({
        county: this.props.depts.find(
          (countyObject) => countyObject.name === county
        ),
        firstDropdownDisabled: true,
      });
    } else {
      return;
    }
  };
  displayDeptInfo = () => {
    if (this.state.county) {
      return (
        <div data-testid="dept-info">
          <p>{this.state.county.name}</p>
          <p>{this.state.county.phone}</p>
          <p>
            <a
              alt="county health dept website"
              href={this.state.county.website}
            >
              Website
            </a>
          </p>

          {this.state.county.twitter ? (
            <p>
              <a alt="twitter" href={this.state.county.twitter}>
                Twitter
              </a>
            </p>
          ) : (
            ""
          )}
          {this.state.county.facebook ? (
            <p>
              <a alt="facebook" href={this.state.county.facebook}>
                Facebook
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
      );
    } else {
      return <div data-testid="dept-info">
        
      </div>;
    }
  };
  render() {
    // console.log(this.state);
    if (this.props.depts.length) {
      return (
        <div
          className="local-health-container"
          data-testid="local-health-container"
        >
          <h2 className="local-health-header">Local Health Depts</h2>
          <h3 className="">Select your county below:</h3>
          <section className="county-picker">
            <CountyDropdown
              disableFirstVal={this.state.firstDropdownDisabled}
              countyNames={this.getCountyNames()}
              selectCounty={(county) => this.selectCounty(county)}
            />
          </section>
          {this.displayDeptInfo()}
        </div>
      );
    } else {
      return (
        <div
          className="local-health-container"
          data-testid="local-health-container"
        >
          <h2 className="local-health-header">Local Health Depts</h2>
          <h3 className="">Select your county below:</h3>
        </div>
      );
    }
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
