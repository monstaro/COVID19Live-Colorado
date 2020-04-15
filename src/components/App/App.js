import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome/Welcome'


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Nav />
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
