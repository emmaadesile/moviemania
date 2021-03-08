import React from "react";
import Movies from "../components/Movies";
import useData from "../useData";
import { render, wait } from "@testing-library/react";

const mockVideos = [
  {
    title: "Bad boys for life",
    vote_count: 3,
    id: "233",
    genre_ids: "rjerg944",
    poster_path: "/bad-boys-for-life",
    original_name: "Bad boys for life",
    vote_average: "3.5",
    first_air_date: "12-12-2012",
    release_date: "12-12-2021",
  },
  {
    title: "Monster Hunter",
    vote_count: 5,
    id: "353",
    genre_ids: "rjerg944",
    poster_path: "/monster-hunter",
    original_name: "Bad boys for life",
    vote_average: "3.5",
    first_air_date: "12-12-2019",
    release_date: "12-12-2020",
  },
];

jest.mock("../useData", () => {
  return {
    useData: () => [mockVideos, false],
  };
});

describe.skip("", () => {
  test("mounts", async () => {
    const { container, getByText } = render(<Movies />);
    // expect(container.innerHTML).toMatchSnapshot();
  });
});
