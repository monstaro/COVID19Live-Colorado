import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import rootReducer from "../../reducers";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { fetchCounties } from "../../apiCalls";
import { fetchHealthDepts, fetchCountyDeaths } from "../../apiCalls";

jest.mock("../../apiCalls");

describe("App", () => {
  beforeEach(() => {
    //create mock
    var mockCounties = [
      {
        OBJECTID: 1,
        STAETFP: "08",
        COUNTYFP: "109",
        GEOID: "08109",
        COUNTY: "SAGUACHE",
        LABEL: "Saguache",
        FULL_: "Saguache County",
        County_Pos_Cases: 3,
        County_Population: 6837,
        County_Rate_Per_100_000: -1,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 13273871024.1289,
        Shape__Length: 529491.079018544,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 2,
        STAETFP: "08",
        COUNTYFP: "115",
        GEOID: "08115",
        COUNTY: "SEDGWICK",
        LABEL: "Sedgwick",
        FULL_: "Sedgwick County",
        County_Pos_Cases: 0,
        County_Population: 2275,
        County_Rate_Per_100_000: 0,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 2491281577.11719,
        Shape__Length: 208249.56871408,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 3,
        STAETFP: "08",
        COUNTYFP: "017",
        GEOID: "08017",
        COUNTY: "CHEYENNE",
        LABEL: "Cheyenne",
        FULL_: "Cheyenne County",
        County_Pos_Cases: 0,
        County_Population: 1862,
        County_Rate_Per_100_000: 0,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 7613550869.75391,
        Shape__Length: 373455.831824096,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 4,
        STAETFP: "08",
        COUNTYFP: "027",
        GEOID: "08027",
        COUNTY: "CUSTER",
        LABEL: "Custer",
        FULL_: "Custer County",
        County_Pos_Cases: 2,
        County_Population: 4928,
        County_Rate_Per_100_000: -1,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 3100361575.17578,
        Shape__Length: 290994.589030107,
        State_Number_Outbreaks: 83,
      },
      {
        OBJECTID: 5,
        STAETFP: "08",
        COUNTYFP: "067",
        GEOID: "08067",
        COUNTY: "LA PLATA",
        LABEL: "La Plata",
        FULL_: "La Plata County",
        County_Pos_Cases: 46,
        County_Population: 56403,
        County_Rate_Per_100_000: 81.56,
        State_Population: 5695430,
        State_Pos_Unknown: 111,
        State_Pos_Cases: 8280,
        Data_Source:
          "Colorado Department of Public Health and Environment - Number of Positive COVID-19 Cases by County",
        Date_Data_Last_Updated: "Data through April 14, 2020",
        State_Number_Tested: 40533,
        State_Number_Hospitalizations: 1636,
        State_Deaths: 357,
        State_Number_of_Counties_Pos: 56,
        State_Rate_Per_100000: 145.41,
        Shape__Area: 6966607866.58203,
        Shape__Length: 371001.027724019,
        State_Number_Outbreaks: 83,
      },
    ];

    var mockHealthDepts = [
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
      {
        id: "3",
        name: "Arapahoe County",
        website: "http://www.tchd.org/",
        twitter: "https://twitter.com/TCHDHealth",
        facebook: "https://www.facebook.com/cotchd/",
        rss: "",
        phone: "(303) 220-9200",
      },
    ];

    const mockCountyDeaths = [
      {
        cases: "1",
        county: "Douglas",
        date: "2020-03-05",
        deaths: "0",
      },
      {
        cases: "1",
        county: "Jefferson",
        date: "2020-03-05",
        deaths: "0",
      },
    ];

    //execute mock function
    fetchCounties.mockResolvedValueOnce(mockCounties);
    fetchHealthDepts.mockResolvedValueOnce(mockHealthDepts);
    fetchCountyDeaths.mockResolvedValueOnce(mockCountyDeaths);
    //render document with store
  });
  it("should render what we expect", () => {
    //create store
    const store = createStore(rootReducer);
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    //assertion
    expect(getByText("CovidLive")).toBeInTheDocument();
    expect(
      getByText("A COVID-19 resource for at-risk Colorado residents.")
    ).toBeInTheDocument();
    expect(getByText("Welcome to CovidLive Colorado")).toBeInTheDocument();
    expect(
      getByText(
        "Our mission is to bring at-risk residents of Colorado the most up-to-date information for their county."
      )
    ).toBeInTheDocument();
  });
  it("should render each component on sidebar when clicked", () => {
    // const store = createStore(rootReducer)
    // fetchCounties.mockResolvedValueOnce(mockCounties)
    const store = createStore(rootReducer);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    fireEvent.click(getByText("About"));
    expect(getByTestId("about-container")).toBeInTheDocument();
    fireEvent.click(getByText("Staying Protected"));
    expect(getByTestId("staying-protected-container")).toBeInTheDocument();
    fireEvent.click(getByText("Your County Health Department"));
    expect(getByTestId("local-health-container")).toBeInTheDocument();
    fireEvent.click(getByText("Live County Stats"));
    expect(getByTestId("county-stats-container")).toBeInTheDocument();
    fireEvent.click(getByText("Bookmarked Counties"));
    expect(getByTestId("bookmarks-container")).toBeInTheDocument();
  });
  it("should render info when clicking on the dropdown menu", async () => {
    const mockDept = {
      id: "2",
      name: "Alamosa County",
      website: "https://www.colorado.gov/pacific/alamosacounty/public-health-2",
      twitter: "",
      facebook: "",
      rss: "",
      phone: "(719) 589-4848",
    };
    const store = createStore(rootReducer);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    fetchHealthDepts.mockResolvedValueOnce(mockDept);

    fireEvent.click(getByText("Your County Health Department"));
    const dropDown = await waitForElement(() =>
      getByTestId("county-dropdown-container")
    );
    expect(dropDown).toBeInTheDocument();
    fireEvent.click(getByTestId("county-dropdown-container"));
    let county = await waitForElement(() => getByTestId("Alamosa County"));
    expect(county).toBeInTheDocument();
    fireEvent.click(county);
    expect(getByTestId("dept-info")).toBeInTheDocument();

    fireEvent.click(getByText("Live County Stats"));
    fireEvent.click(getByTestId("county-dropdown-container"));
    let countyData = await waitForElement(() => getByTestId("Cheyenne County"));
    fireEvent.click(county);
    expect(getByTestId('Cheyenne County')).toBeInTheDocument();
    expect(getByTestId('county-data-container')).toBeInTheDocument();
  });
});
