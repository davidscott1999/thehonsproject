import React from 'react';

import { Form } from 'formik';

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PasswordReset } from './PasswordReset';

describe("password reset test", () => {
  test("renders a form", () => {
    render(<Form />);

    expect(screen.getByRole("form")).toHaveFormValues(
      "passwordtest",
    );
  });

  test("submitting the form calls onSubmit with munro details", () => {
    const onSubmit = jest.fn();
    render(<PasswordReset onSubmit={onSubmit} />);
    const password = "this is my password";

    userEvent.type(screen.getByText(/smcid:/i), password);
    userEvent.type(
      screen.getByRole("button", {
        name: /save/i,
      })
    );
    expect(onSubmit).toHaveBeenCalledWith({
      password
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
