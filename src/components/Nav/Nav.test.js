import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../reducers";
import Nav from "./Nav";

describe("Nav", () => {
  it("should render nav text", () => {
    const store = createStore(rootReducer);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>
    );
    expect(getByTestId("nav-container")).toBeInTheDocument();
  });
});
