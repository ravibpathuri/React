import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import Users from "./Users";

test("renders Users ", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Users />
    </Provider>
  );

  expect(getByText("Users Data")).toBeInTheDocument();
});
