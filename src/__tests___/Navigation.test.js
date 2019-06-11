import React from "react";
import { render } from "react-testing-library";
import Navigation from "../components/Navigation";

describe("App Navigation", () => {
  test("renders the navigation component", () => {
    const { getByText } = render(<Navigation />);
    const moviesLink = getByText(/movies/i);
    const tvShowLink = getByText(/tv shows/i);
    expect(moviesLink).toBeDefined();
    expect(tvShowLink).toBeDefined();
  });
});
