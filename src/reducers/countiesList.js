export const countiesList = (state=[], action) => {
    console.log(action)
    switch (action.type) {
        case 'LOAD_COUNTIES':
        return [...state, action]
        default:
            return state;
    }
}