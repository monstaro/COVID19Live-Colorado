export const bookmarks = (state = [], action) => {
  switch (action.type) {
    case "SAVE_BOOKMARK":
      return [...state, action.bookmark];
    case "REMOVE_BOOKMARK":
      return [
        ...state.filter(
          (entry) => entry.countyName !== action.bookmark.countyName
        ),
      ];
    default:
      return state;
  }
};
