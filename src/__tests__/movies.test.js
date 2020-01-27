import React from "react";
import Movies from "../components/Movies";
import { useDataApi as mockDataApi } from '../useDataApi';
import { render, wait } from "@testing-library/react";

jest.mock('../useDataApi', () => {
  return {
    fetchVideos: jest.fn(data => Promise.resolve(data))
  }
})

test.skip('mounts', async () => {
  const {container, getByText} = render(<Movies/>)
  expect(container.innerHTML).toMatchSnapshot();
})