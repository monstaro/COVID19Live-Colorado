import { healthDepts } from "./healthDepts";
import { loadHealthDepts } from "../actions";

describe("healthDepts", () => {
  it("should return an initial state", () => {
    const expectedResult = { healthDepts: [], type: "LOAD_HEALTH_DEPTS" };
    const result = loadHealthDepts([], []);
    expect(result).toEqual(expectedResult);
  });
  it("should return an array of health depts when recieving LOAD_HEALTH_DEPTS action", () => {
    const mockAction = {
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

    const mockDepts = [
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
      }
    ]
    const result = healthDepts([], mockAction)
    expect(result).toEqual(mockDepts)
  });
});
