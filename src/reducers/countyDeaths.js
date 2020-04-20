export const countyDeaths = (state = [], action) => {
  switch (action.type) {
    case "LOAD_COUNTY_DEATHS":
      return [...state, ...action.countyDeaths];
    default:
      return state;
  }
};
