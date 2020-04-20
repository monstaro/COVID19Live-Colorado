import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
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
    expect(getByTestId('about inactive-link')).toBeInTheDocument()
    expect(getByTestId('staying-protected inactive-link')).toBeInTheDocument()
    expect(getByTestId('local-health inactive-link')).toBeInTheDocument()
    expect(getByTestId('county-stats inactive-link')).toBeInTheDocument()
    expect(getByTestId('bookmarked-counties inactive-link')).toBeInTheDocument()
    })
    it('should have an active class', async () => {
      const store = createStore(rootReducer)
      const { getByTestId } = render (
        <Provider store = {store}>
          <Router>
            <Sidebar />
          </Router>
        </Provider>
      )
      fireEvent.click(getByTestId('about inactive-link'))
      const aboutActive = await waitForElement(() => getByTestId('about active-link'))
      expect(aboutActive).toBeInTheDocument();
      fireEvent.click(getByTestId('staying-protected inactive-link'))
      const protectedActive = await waitForElement(() => getByTestId('staying-protected active-link'))
      expect(protectedActive).toBeInTheDocument();
      fireEvent.click(getByTestId('local-health inactive-link'))
      const healthActive = await waitForElement(() => getByTestId('local-health active-link'))
      expect(healthActive).toBeInTheDocument();
      fireEvent.click(getByTestId('county-stats inactive-link'))
      const statsActive = await waitForElement(() => getByTestId('county-stats active-link'))
      expect(statsActive).toBeInTheDocument();
      fireEvent.click(getByTestId('bookmarked-counties inactive-link'))
      const bookmarksActive = await waitForElement(() => getByTestId('bookmarked-counties active-link'))
      expect(bookmarksActive).toBeInTheDocument();
    })
})