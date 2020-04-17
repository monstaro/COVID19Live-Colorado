import React from 'react';


const CountyData = ({countyData}) => {
    const data = () => {
        if (countyData) {
            return countyData.County_Pos_Cases
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