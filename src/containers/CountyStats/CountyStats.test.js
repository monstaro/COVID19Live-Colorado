import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CountyStats from './CountyStats'

describe ('County Stats', () => {
    it('should render county stats info', () => {
    const store = createStore(rootReducer)
    const { getByTestId } = render (
      <Provider store = {store}>
        <Router>
          <CountyStats />
        </Router>
      </Provider>
    )
    expect(getByTestId('county-stats-container')).toBeInTheDocument()
    })
})