/* eslint-disable no-undef */
import { bookmarks } from "./bookmarks";
import { saveBookmark, removeBookmark } from "../actions";

describe("bookmarks", () => {
  it("should return an initial state", () => {
    const expectedResult = { bookmark: [], type: "SAVE_BOOKMARK" };
    const result = saveBookmark([], []);
    expect(result).toEqual(expectedResult);
    const expectedResult2 = { bookmark: [], type: "REMOVE_BOOKMARK" };
    const result2 = removeBookmark([], []);
    expect(result2).toEqual(expectedResult2);
  });
  it("should return an array of bookmarks when recieving SAVE_BOOKMARK action", () => {
    const mockAction = {
      type: "SAVE_BOOKMARK",
      bookmark: {
        bookmarkBtnTxt: "Add To Bookmarks",
        cases: 10,
        countyName: "Baca County:",
        countyPop: 3547,
        deaths: 0,
        firstDropdownDisabled: true,
      },
    };

    const mockBookmarks = [
      {
        bookmarkBtnTxt: "Add To Bookmarks",
        cases: 10,
        countyName: "Baca County:",
        countyPop: 3547,
        deaths: 0,
        firstDropdownDisabled: true,
      },
    ];
    const result = bookmarks([], mockAction);
    expect(result).toEqual(mockBookmarks);
  });
  it("should return an array of bookmarks minus one when recieving REMOVE_BOOKMARK action", () => {
    const mockAction = {
      type: "REMOVE_BOOKMARK",
      bookmark: {
        bookmarkBtnTxt: "Add To Bookmarks",
        cases: 10,
        countyName: "Baca County:",
        countyPop: 3547,
        deaths: 0,
        firstDropdownDisabled: true,
      },
    };

    const mockBookmarks = [];
    const result = bookmarks([], mockAction);
    expect(result).toEqual(mockBookmarks);
  });
});
