
export const fetchCounties = async () => {
    const response = await fetch('https://opendata.arcgis.com/datasets/fbae539746324ca69ff34f086286845b_0.geojson');
    const data = await response.json();
    return data.features.map(entries => {
        return entries.properties
    })
}

export const fetchHealthDepts = async () => {
    const response = await fetch('https://postman-data-api-templates.github.io/county-health-departments/api/colorado.json');
    const data = await response.json();
    return data
}