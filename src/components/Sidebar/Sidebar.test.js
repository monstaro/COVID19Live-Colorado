import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import Sidebar from './Sidebar'

describe ('Sidebar', () => {
    it('should render each sidebar link', () => {
        const store = createStore(rootReducer)
    const { getByTestId } = render (
      <Provider store = {store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>
    )
    expect(getByTestId('about')).toBeInTheDocument()
    expect(getByTestId('staying-protected')).toBeInTheDocument()
    expect(getByTestId('local-health')).toBeInTheDocument()
    expect(getByTestId('county-stats')).toBeInTheDocument()
    expect(getByTestId('bookmarked-counties')).toBeInTheDocument()

    })
})