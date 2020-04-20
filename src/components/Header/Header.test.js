import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import Header from "./Header";

describe("Header", () => {
  it("should render the header text", () => {
    const store = createStore(rootReducer);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(getByTestId("header-container")).toBeInTheDocument();
  });
});
