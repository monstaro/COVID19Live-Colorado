export const countiesList = (state=[], action) => {
    switch (action.type) {
        case 'LOAD_COUNTIES':
        return [...state, action.counties]
        default:
            return state;
    }
}