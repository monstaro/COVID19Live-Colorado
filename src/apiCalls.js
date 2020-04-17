var Papa = require("papaparse");

export const fetchCounties = async () => {
  const response = await fetch(
    "https://opendata.arcgis.com/datasets/fbae539746324ca69ff34f086286845b_0.geojson"
  );
  const data = await response.json();
  return data.features.map((entries) => {
    return entries.properties;
  });
};

export const fetchHealthDepts = async () => {
  const response = await fetch(
    "https://postman-data-api-templates.github.io/county-health-departments/api/colorado.json"
  );
  const data = await response.json();
  return data;
};

export const fetchCountyDeaths = async () => {
  const response = await Papa.parse(
    "https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",
    {
      delimiter: "", // auto-detect
      newline: "", // auto-detect
      quoteChar: '"',
      escapeChar: '"',
      header: true,
      transformHeader: undefined,
      dynamicTyping: false,
      preview: 0,
      encoding: "",
      worker: false,
      comments: false,
      step: undefined,
      complete: function (results) {
        console.log(results.data.filter(entry => entry.state === 'Colorado'));
      },
      error: undefined,
      download: true,
      downloadRequestHeaders: undefined,
      downloadRequestBody: undefined,
      skipEmptyLines: false,
      chunk: undefined,
      fastMode: undefined,
      beforeFirstChunk: undefined,
      withCredentials: undefined,
      transform: undefined,
      delimitersToGuess: [",", "\t", "|", ";", Papa.RECORD_SEP, Papa.UNIT_SEP],
    }
  );
  return response;
};
