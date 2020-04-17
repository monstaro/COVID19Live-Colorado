import React from 'react';

const CountyData = (props) => {
    const data = () => {
        if (props.countyDeaths && props.countyDeaths.length) {
            return props.countyDeaths[props.countyDeaths.length-1].deaths
        } else {
            return ('Loading..')
        }
    }
   return(
       <div data-testid="county-data-container">
          <h4 className="deaths-in-county">Deaths:</h4> {data()}
       </div>
   )
}

export default CountyData