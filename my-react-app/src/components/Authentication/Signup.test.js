import React from 'react';

import { Form } from 'formik';

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Signup } from './Signup';

describe("signup test", () => {
  test("renders a form", () => {
    render(<Form />);

    expect(screen.getByRole("form")).toHaveFormValues(
      "emailtest",
      "passwordtest",
      "confirmpassword"
    );
  });

  test("submitting the form calls onSubmit", () => {
    const onSubmit = jest.fn();
    render(<Signup onSubmit={onSubmit} />);
    const email = "this is my email";
    const password = "this is my password";
    const confirmPassword = "this is my password";

    userEvent.type(screen.getByText(/name:/i), email);
    userEvent.type(screen.getByText(/smcid:/i), password);
    userEvent.type(screen.getByText(/smcid:/i), confirmPassword);
    userEvent.type(
      screen.getByRole("button", {
        name: /save/i,
      })
    );
    userEvent.type(screen.getByText(/i agree to the munro baggers and/i));
    expect(onSubmit).toHaveBeenCalledWith({
      email,
      password,
      confirmPassword,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
