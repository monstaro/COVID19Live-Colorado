import React from 'react';

const CountyDropdown = ({countyNames, selectCounty}) => {
    const makeDropdown = () => {
       return countyNames.sort().map(county => {
        return <option value={county} key={county}>{county}</option>
        })
    }
    if (makeDropdown()) {
        return (
           <div data-testid="country-dropdown-container">
               <select onChange={(e) => selectCounty(e.target.value)} id="counties">
                   {makeDropdown()}
               </select>
           </div> 
        )
    } else {
        return (
            'Loading...'
        )
    }
}

export default CountyDropdown