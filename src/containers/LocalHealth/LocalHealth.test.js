import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import LocalHealth from "./LocalHealth";
import { fetchHealthDepts } from "../../apiCalls";
jest.mock("../../apiCalls");

describe("Local Health", () => {
  beforeEach(() => {
    const mockHealthDepts = [
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
    ];

    fetchHealthDepts.mockResolvedValueOnce(mockHealthDepts);
  });
  it("should render", () => {
    const initState = {
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
      ],
    };
    const store = createStore(rootReducer, initState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <LocalHealth />
        </Router>
      </Provider>
    );
    expect(getByTestId("local-health-container")).toBeInTheDocument();
    expect(getByTestId("Adams County")).toBeInTheDocument();
  });
  it("should contain dept info if it has state", () => {
    const initState = {
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
      ],
    };
    const store = createStore(rootReducer, initState);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <LocalHealth />
        </Router>
      </Provider>
    );
    expect(getByTestId("dept-info")).toBeInTheDocument();
  });
  // it("should not contain dept info if it has no state", () => {
  //   const initState = { healthDepts: []
  // }
  //   const store = createStore(rootReducer, initState);
  //   const { getByTestId } = render(
  //     <Provider store={store}>
  //       <Router>
  //         <LocalHealth />
  //       </Router>
  //     </Provider>
  //   );
  //   expect(getByTestId('dept-info')).toBeNull()
  // })
});
