import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import Welcome from './Welcome'

describe ('Welcome', () => {
    it('should render', () => {
    const store = createStore(rootReducer)
    const { getByTestId } = render (
      <Provider store = {store}>
        <Router>
          <Welcome />
        </Router>
      </Provider>
    )
    expect(getByTestId('welcome-container')).toBeInTheDocument()
    })
})