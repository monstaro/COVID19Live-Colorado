import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import CountyData from './CountyData';

describe ('County Data', () => {
    it('should render county data', () => {
    const store = createStore(rootReducer)
    const { getByTestId, getByText } = render (
      <Provider store = {store}>
        <Router>
          <CountyData 
            deaths={45}
            cases={50}
            countyPop={51}
            countyName={'Milford'}
          />
        </Router>
      </Provider>
    )
    expect(getByTestId('county-data-container')).toBeInTheDocument();
    expect(getByText('Milford')).toBeInTheDocument()
    })
})