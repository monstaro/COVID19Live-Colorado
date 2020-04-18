import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import Bookmarks from './Bookmarks'

describe ('Bookmarks', () => {
    it('should render bookmarks link', () => {
    const store = createStore(rootReducer)
    const { getByTestId } = render (
      <Provider store = {store}>
        <Router>
          <Bookmarks />
        </Router>
      </Provider>
    )
    expect(getByTestId('bookmarks-container')).toBeInTheDocument()
    })
})