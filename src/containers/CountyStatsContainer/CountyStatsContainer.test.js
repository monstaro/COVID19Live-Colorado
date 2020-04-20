import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import CountyStatsContainer from "./CountyStatsContainer";
import App from "./../App/App";
import CountyData from "./../../components/CountyData/CountyData";

import { fetchCounties } from "../../apiCalls";
import { fetchCountyDeaths } from "../../apiCalls";

jest.mock("../../apiCalls");

describe("County Stats", () => {
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
    fetchCountyDeaths.mockResolvedValueOnce(mockCountyDeaths);
    //render document with store
  });

  it("should render county stats info", () => {
    const store = createStore(rootReducer);
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Router>
          <CountyStatsContainer />
        </Router>
      </Provider>
    );
    expect(getByTestId("county-stats-container")).toBeInTheDocument();
  });
  it("should be able to select a county and display its data", async () => {
    const store = createStore(rootReducer);
    const { getAllByText, getAllByTestId, getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
          <CountyStatsContainer 
            countyName={'Denver County'}
            deaths={5}
            />
        </Router>
      </Provider>
    );
    const selectCounty = jest.fn();
    selectCounty("Denver County");
    expect(selectCounty).toHaveBeenCalled();
    expect(selectCounty).toHaveBeenCalledTimes(1);
    expect(selectCounty).toBeCalledWith("Denver County");
    fireEvent.click(getByText("Live County Stats"));
    let county = await waitForElement(() => getAllByText("Sedgwick County"));
    fireEvent.click(county[1]);
    let countyInfo = await waitForElement(() =>
      getAllByTestId("county-data-container")
    );
    expect(countyInfo[1]).toBeInTheDocument();
  });
});
