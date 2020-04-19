import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CountyStatsContainer from './CountyStatsContainer'

describe ('County Stats', () => {
    it('should render county stats info', () => {
    const store = createStore(rootReducer)
    const { getByTestId, getByText } = render (
      <Provider store = {store}>
        <Router>
          <CountyStatsContainer />
        </Router>
      </Provider>
    )
    expect(getByTestId('county-stats-container')).toBeInTheDocument();
    })
})