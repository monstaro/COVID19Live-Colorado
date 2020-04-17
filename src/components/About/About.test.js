import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import About from './About'

describe ('About', () => {
    it('should render', () => {
    const store = createStore(rootReducer)
    const { getByTestId } = render (
      <Provider store = {store}>
        <Router>
          <About />
        </Router>
      </Provider>
    )
    expect(getByTestId('about-container')).toBeInTheDocument()
    })
})