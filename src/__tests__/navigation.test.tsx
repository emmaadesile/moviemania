import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("App Navigation", () => {
  test("mounts", () => {
    const { container } = render(<Navigation />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders the navigation component", () => {
    const { getByText } = render(<Navigation />);
    const moviesLink = getByText(/movies/i);
    const tvShowLink = getByText(/tv shows/i);

    expect(moviesLink).toBeInTheDocument();
    expect(tvShowLink).toBeInTheDocument();
  });

  test("should redirect to tv-shows page", async () => {
    const { getByText, debug } = render(<Navigation />);
    const tvShowsLink = getByText(/tv shows/i);

    fireEvent.click(tvShowsLink);
    expect(window.location.pathname).toEqual("/tv");
  });
});
