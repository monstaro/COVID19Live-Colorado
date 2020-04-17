import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CountyDropdown from './CountyDropdown';

describe ('County Dropdown List', () => {
    it('should render counties', () => {
    const mockCountyNames = ['Adams County', 'Denver County']
    const store = createStore(rootReducer)
    const { getByTestId, getByText } = render (
      <Provider store = {store}>
        <Router>
          <CountyDropdown countyNames={mockCountyNames}/>
        </Router>
      </Provider>
    )
    expect(getByTestId('country-dropdown-container')).toBeInTheDocument();
    expect(getByText('Adams County')).toBeInTheDocument()
    })
})