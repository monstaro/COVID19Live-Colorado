export const loadCounties = counties => ({
    type: 'LOAD_COUNTIES',
    counties
})

export const loadHealthDepts = healthDepts => ({
    type: 'LOAD_HEALTH_DEPTS',
    healthDepts
})

export const loadCountyDeaths = countyDeaths => ({
    type: 'LOAD_COUNTY_DEATHS',
    countyDeaths
})