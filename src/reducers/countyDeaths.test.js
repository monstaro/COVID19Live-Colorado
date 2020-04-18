import { countyDeaths } from "./countyDeaths";
import { loadCountyDeaths } from "../actions";

describe("county deaths", () => {
  it("should return an initial state", () => {
    const expectedResult = { countyDeaths: [], type: "LOAD_COUNTY_DEATHS" };
    const result = loadCountyDeaths([], []);
    expect(result).toEqual(expectedResult);
  });
  it("should return an array of deaths when recieving LOAD_COUNTY_DEATHS action", () => {
    const mockAction = {
      type: "LOAD_COUNTY_DEATHS",
      countyDeaths: [
        {
          cases: "1",
          county: "Douglas",
          date: "2020-03-05",
          deaths: "0",
        },
        {
          cases: "2",
          county: "Douglas",
          date: "2020-03-06",
          deaths: "0",
        },
      ],
    };

    const mockDeaths = [
      {
        cases: "1",
        county: "Douglas",
        date: "2020-03-05",
        deaths: "0",
      },
      {
        cases: "2",
        county: "Douglas",
        date: "2020-03-06",
        deaths: "0",
      },
    ];
    const result = countyDeaths([], mockAction);
    expect(result).toEqual(mockDeaths);
  });
});
