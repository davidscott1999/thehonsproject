import '@testing-library/jest-dom';

// __tests__/fetch.test.js
import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import Fetch from '../fetch';
import { Map } from './Map';

test("loads items eventually", async () => {
  render(<Map />);

  // Click button
  fireEvent.click(screen.getByText("Load"));

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});

const server = setupServer(
  rest.get("/map", (req, res, ctx) => {
    return res(ctx.json({ mapLayer: "" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays map", async () => {
  render(<Fetch url="/map" />);

  await waitFor(() => screen.getByRole("map"));

  expect(screen.getByRole("button")).toBeDisabled();
});

test("handles server error", async () => {
  server.use(
    rest.get("/map", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Fetch url="/map" />);

  fireEvent.click(screen.getByText("Load Map"));

  await waitFor(() => screen.getByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
