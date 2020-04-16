export const healthDepts = (state = [], action) => {
  switch (action.type) {
    case "LOAD_HEALTH_DEPTS":
      return [...state, ...action.healthDepts];
    default:
      return state;
  }
};
