const request=require('request')
const csv=require('csvtojson')

export const fetchCounties = async () => {
  const response = await fetch(
    "https://opendata.arcgis.com/datasets/fbae539746324ca69ff34f086286845b_0.geojson"
  );
  const data = await response.json();
  const filteredData = data.features.map((entries) => ({
    County_Population: entries.properties.County_Population,
    County_Pos_Cases: entries.properties.County_Pos_Cases,
    FULL_: entries.properties.FULL_,
   }));
  return filteredData
};

export const fetchHealthDepts = async () => {
  const response = await fetch(
    "https://postman-data-api-templates.github.io/county-health-departments/api/colorado.json"
  );
  const data = await response.json();
  return data;
};

export const fetchCountyDeaths = async () => {
    
    const countyDeaths = []
    await csv()
    .fromStream(request.get('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv'))
    .subscribe((json)=>{
        if(json.state === 'Colorado') {
            countyDeaths.push(json)
        }
    })
    const a = await countyDeaths
    const b = await a.map(entry => ({cases: entry.cases,
      county: entry.county,
      date: entry.date,
      deaths: entry.deaths}))
    return b
};
