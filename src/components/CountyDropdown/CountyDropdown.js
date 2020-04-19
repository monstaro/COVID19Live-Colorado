import React from 'react';
import './CountyDropdown.scss';

const CountyDropdown = ({disableFirstVal, countyNames, selectCounty}) => {
    const makeDropdown = () => {
       return countyNames.sort().map(county => {
        return <option data-testid={county} value={county} key={county}>{county}</option>
        })
    }
    if (makeDropdown()) {
        return (
           <div data-testid="county-dropdown-container">
               <select onChange={(e) => selectCounty(e.target.value)} id="counties">
               <option disabled={disableFirstVal}  value='default' key='default'>Click here</option>
                   {makeDropdown()}
               </select>
           </div> 
        )
    } else {
        return (
            <div data-testid="county-dropdown-container">
                
            </div>
        )
    }
}

export default CountyDropdown