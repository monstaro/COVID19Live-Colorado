import React, { Component } from "react";
import "./CountyStatsContainer.scss";
import { connect } from "react-redux";
import CountyDropdown from "../../components/CountyDropdown/CountyDropdown";
import CountyData from "../../components/CountyData/CountyData";
import { saveBookmark, removeBookmark } from "../../actions";
import PropTypes from "prop-types";

class CountyStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countyName: null,
      deaths: null,
      cases: null,
      countyPop: null,
      firstDropdownDisabled: false,
      bookmarkBtnTxt: "Add To Bookmarks",
    };
  }
  getCountyNames() {
    let counties;
    if (this.props.counties.length) {
      counties = this.props.counties.map((county) => {
        return county.FULL_;
      });
    }
    return counties;
  };
  selectCounty(county) {
    if (county !== "default") {
      this.setState(
        {
          countyName:
            this.props.counties.find(
              (countyObject) => countyObject.FULL_ === county
            ).FULL_ + ":",
          deaths: this.returnCurrentCountyInfo(county),
          cases: this.props.counties.find(
            (countyObject) => countyObject.FULL_ === county
          ).County_Pos_Cases,
          countyPop: this.props.counties.find(
            (countyObject) => countyObject.FULL_ === county
          ).County_Population,
          firstDropdownDisabled: true,
        },
        () => {
          this.setState({
            bookmarkBtnTxt: this.props.bookmarks.find(
              (bookmark) => bookmark.countyName === this.state.countyName
            )
              ? "Remove From Bookmarks"
              : "Add To Bookmarks",
          });
        }
      );
    } else {
      return;
    }
  };
  returnCurrentCountyInfo(county) {
    let a = this.props.countyDeaths.filter(
      (co) => co.county === county.split(" ")[0]
    );
    let b = a[a.length - 1];
    if (b) {
      return parseInt(b.deaths);
    } else {
      return 0;
    }
  };
  toggleBookmark() {
    if (
      this.props.bookmarks.find(
        (bookmark) => bookmark.countyName === this.state.countyName
      )
    ) {
      this.props.removeBookmark(this.state);
      this.setState({
        bookmarkBtnTxt: "Bookmark This County",
      });
    } else {
      this.props.saveBookmark(this.state);
      this.setState({
        bookmarkBtnTxt: "Remove From Bookmarks",
      });
    }
  };
  render() {
    if (this.props.counties.length) {
      return (

        <div
          className="county-stats-container"
          data-testid="county-stats-container"
        >
          <h2 className="county-stats-header">County Stats</h2>
          <h3 className="county-stats-subheader">Select A County Below</h3>
          <section className="county-picker">
            <CountyDropdown
              disableFirstVal={this.state.firstDropdownDisabled}
              countyNames={this.getCountyNames()}
              selectCounty={(county) => this.selectCounty(county)}
            />
              </section>
            <CountyData
              deaths={this.state.deaths}
              cases={this.state.cases}
              countyPop={this.state.countyPop}
              countyName={this.state.countyName}
            />
          <button
            hidden={!this.state.countyName}
            onClick={() => this.toggleBookmark()}
            className="bookmark-btn"
          >
            {this.state.bookmarkBtnTxt}
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="county-stats-container"
          data-testid="county-stats-container"
        >
          <h2 className="county-stats-header">County Stats</h2>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  counties: state.countiesList,
  countyDeaths: state.countyDeaths,
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = (dispatch) => ({
  saveBookmark: (bookmark) => dispatch(saveBookmark(bookmark)),
  removeBookmark: (bookmark) => dispatch(removeBookmark(bookmark)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountyStats);

CountyStats.propTypes = {
  className: PropTypes.string,
  counties: PropTypes.array,
  countyDeaths: PropTypes.array,
  bookmarks: PropTypes.array,
  saveBookmark: PropTypes.func,
  removeBookmark: PropTypes.func
};
