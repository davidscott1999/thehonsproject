import React from 'react';

import {
  getByText,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddLogs } from './AddLogs';

beforeAll(() =>)

test("submitting the form calls onSubmit with munro details", () => {
  const onSubmit = jest.fn();
  render(<AddLogs onSubmit={onSubmit} />);
  const name = "Ben Nevis";
  const smcid = "M001";
  const region = "Loch Linnhe to Loch Ericht";
  const date = "12/02/2022";
  const comment = "Test";
  userEvent.type(screen.getByText(/name:/i), name);
  userEvent.type(screen.getByText(/smcid:/i), smcid);
  userEvent.type(screen.getByText(/region:/i), region);
  userEvent.type(getByText(/date:/i), date);
  userEvent.type(getByText(/comment:/i), comment);
  userEvent.type(
    screen.getByRole("button", {
      name: /save/i,
    })
  );
  expect(onSubmit).toHaveBeenCalledWith({
    name,
    smcid,
    region,
    date,
    comment,
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
