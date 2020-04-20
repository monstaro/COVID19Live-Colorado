/* eslint-disable no-undef */
import * as actions from "../actions";

describe("Action Creators", () => {
  it("should have a type of LOAD_COUNTIES and a correct payload", () => {
    const expectedAction = {
      type: "LOAD_COUNTIES",
      counties: [
        {
          FULL_: "Saguache County",
          County_Pos_Cases: 3,
          County_Population: 6837,
        },
        {
          FULL_: "Sedgwick County",
          County_Pos_Cases: 0,
          County_Population: 2275,
        },
        {
          FULL_: "Cheyenne County",
          County_Pos_Cases: 0,
          County_Population: 1862,
          County_Rate_Per_100_000: 0,
        },
      ],
    };
    const result = actions.loadCounties([
      {
        FULL_: "Saguache County",
        County_Pos_Cases: 3,
        County_Population: 6837,
      },
      {
        FULL_: "Sedgwick County",
        County_Pos_Cases: 0,
        County_Population: 2275,
      },
      {
        FULL_: "Cheyenne County",
        County_Pos_Cases: 0,
        County_Population: 1862,
        County_Rate_Per_100_000: 0,
      },
    ]);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type LAOD_HEALTH_DEPTS and deliver the correct payload", () => {
    const expectedAction = {
      type: "LOAD_HEALTH_DEPTS",
      healthDepts: [
        {
          id: "1",
          name: "Adams County",
          website: "http://www.tchd.org/",
          twitter: "https://twitter.com/TCHDHealth",
          facebook: "https://www.facebook.com/cotchd/",
          rss: "",
          phone: "(303) 220-9200",
        },
        {
          id: "2",
          name: "Alamosa County",
          website:
            "https://www.colorado.gov/pacific/alamosacounty/public-health-2",
          twitter: "",
          facebook: "",
          rss: "",
          phone: "(719) 589-4848",
        },
      ],
    };
    const result = actions.loadHealthDepts([
      {
        id: "1",
        name: "Adams County",
        website: "http://www.tchd.org/",
        twitter: "https://twitter.com/TCHDHealth",
        facebook: "https://www.facebook.com/cotchd/",
        rss: "",
        phone: "(303) 220-9200",
      },
      {
        id: "2",
        name: "Alamosa County",
        website:
          "https://www.colorado.gov/pacific/alamosacounty/public-health-2",
        twitter: "",
        facebook: "",
        rss: "",
        phone: "(719) 589-4848",
      },
    ]);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type SAVE_BOOKMARKS and deliver a payload", () => {
    const expectedAction = {
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
    const result = actions.saveBookmark(expectedAction.bookmark);
    expect(result).toEqual(expectedAction);
  });
  it("should have a type REMOVE_BOOKMARKS and deliver a payload", () => {
    const expectedAction = {
      type: "REMOVE_BOOKMARK",
      bookmark: {
        bookmarkBtnTxt: "Remove From Bookmarks",
        cases: 10,
        countyName: "Baca County:",
        countyPop: 3547,
        deaths: 0,
        firstDropdownDisabled: true,
      },
    };
    const result = actions.removeBookmark(expectedAction.bookmark);
    expect(result).toEqual(expectedAction);
  });
});
