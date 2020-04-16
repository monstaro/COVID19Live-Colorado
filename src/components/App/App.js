import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import About from "../About/About";
import StayingProtected from "../StayingProtected/StayingProtected";
import Bookmarks from "../Bookmarks/Bookmarks";
import LocalHealth from "../LocalHealth/LocalHealth";
import CountyStats from "../CountyStats/CountyStats";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Nav className="nav" />
      <Sidebar className="sidebar" />
      <Switch>
        <Route
          path="/"
          exact
          component={() => <Welcome className="main-area" />}
        />
      </Switch>
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
        component={() => <CountyStats className="main-area" />}
      />
      <Route
        path="/bookmarks"
        exact
        component={() => <Bookmarks className="main-area" />}
      />
      <Route 
        path="/local-health"
        exact
        component={() => <LocalHealth />} />
      <Route 
        path="/welcome"
        exact
        component={() => <Welcome />} />
      <Footer className="footer" />
    </div>
  );
}

export default App;
