
export const fetchCounties = () => {
    return fetch('https://opendata.arcgis.com/datasets/fbae539746324ca69ff34f086286845b_0.geojson')
        // .then(res => res.json())
        // .then(data => {
        //     loadCounties(
        //         data.features.map(entries => {
        //         return entries.properties
        //     }))
        // })
}
