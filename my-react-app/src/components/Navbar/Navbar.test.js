import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import Navbar from './Navbar';

describe("<Nav bar>", () => {
  test("renders a nav bar", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toHaveClass("nav-bar");
  });

  test("checks for aria-label", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label");
  });
});
