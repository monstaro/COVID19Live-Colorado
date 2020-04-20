import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import StayingProtected from "../../components/StayingProtected/StayingProtected";
import Bookmarks from "../Bookmarks/Bookmarks";
import LocalHealth from "../LocalHealth/LocalHealth";
import CountyStatsContainer from "../CountyStatsContainer/CountyStatsContainer";
import { loadCounties, loadCountyDeaths } from "../../actions";
import { fetchCounties, fetchCountyDeaths } from "../../apiCalls";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

class App extends Component {
  componentDidMount() {
    fetchCounties()
      .then((data) => this.props.loadCounties(data))
      .catch((err) => console.error(err.message));
    fetchCountyDeaths().then((data) => this.props.loadCountyDeaths(data));
  }
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Nav className="nav" />
        <Sidebar className="sidebar" />
        <Route path="/">
          <Redirect to="/welcome" />
        </Route>
        <Route
          path="/about"
          exact
          component={() => <About className="main-area" />}
        />
        <Route
          path="/staying-protected"
          exact
          component={() => <StayingProtected className="main-area" />}
        />
        <Route
          path="/county-stats"
          exact
          component={() => <CountyStatsContainer className="main-area" />}
        />
        <Route
          path="/bookmarks"
          exact
          component={() => <Bookmarks className="main-area" />}
        />
        <Route
          path="/local-health"
          exact
          component={() => <LocalHealth className="main-area" />}
        />
        <Route
          path="/welcome"
          exact
          component={() => <Welcome className="main-area" />}
        />
        <Footer className="footer" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadCounties: (counties) => dispatch(loadCounties(counties)),
  loadCountyDeaths: (countyDeaths) => dispatch(loadCountyDeaths(countyDeaths)),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  loadCounties: PropTypes.func,
  loadCountyDeaths: PropTypes.func
}
  
  