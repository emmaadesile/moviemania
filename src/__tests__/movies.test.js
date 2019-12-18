import React from "react";
import Movies from "../components/Movies";
import { render, wait } from "@testing-library/react";

test.skip('mounts', async () => {
  await wait(() => getByText())
  const {container, getByText} = render(<Movies/>)
  expect(container.innerHTML).toMatchSnapshot();
})