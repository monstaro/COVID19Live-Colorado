import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import Bookmarks from "./Bookmarks";

describe("Bookmarks", () => {
  it("should render bookmarks link", () => {
    const store = createStore(rootReducer);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Bookmarks />
        </Router>
      </Provider>
    );
    expect(getByTestId("bookmarks-container")).toBeInTheDocument();
  });
  it("should display bookmarks", async () => {
    const initialState = {
      bookmarks: [
        {
          countyName: "Cheyenne County:",
          deaths: 2,
          cases: 103,
          countyPop: 69453,
          firstDropdownDisabled: true,
          bookmarkBtnTxt: "Add To Bookmarks",
          date: "2020-04-19",
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Router>
          <Bookmarks />
        </Router>
      </Provider>
    );
    expect(getByText('Cheyenne County:')).toBeInTheDocument;
  });
});
