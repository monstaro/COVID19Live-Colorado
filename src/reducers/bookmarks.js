export const bookmarks = (state=[], action) => {
    console.log(action, state)
    switch (action.type) {
        case 'SAVE_BOOKMARK':
        return [...state, action]
        default:
            return state;
    }
}