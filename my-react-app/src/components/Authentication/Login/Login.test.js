import React from 'react';

import { Form } from 'formik';

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Login } from './Login';

describe("login test", () => {
  test("renders a form", () => {
    render(<Form />);

    expect(screen.getByRole("form")).toHaveFormValues(
      "passwordtest"
    );
  });

  test("submitting the form calls onSubmit with munro details", () => {
    const onSubmit = jest.fn();
    render(<Login onSubmit={onSubmit} />);
    const password = "this is my password";
    const email = "this is my password";

    userEvent.type(screen.getByText(/smcid:/i), password);
    userEvent.type(screen.getByText(/smcid:/i), email);
    userEvent.type(
      screen.getByRole("button", {
        name: /save/i,
      })
    );
    expect(onSubmit).toHaveBeenCalledWith({
      email,
      password,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
