import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome/Welcome'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Nav from '../Nav/Nav'


function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <Nav className="nav"/>
      <Sidebar className="sidebar"/>
      <Switch>
        <Route
          path="/" exact
          component={() => <Welcome className="welcome"/>}
        />
      </Switch>
    </div>
  );
}

export default App;
