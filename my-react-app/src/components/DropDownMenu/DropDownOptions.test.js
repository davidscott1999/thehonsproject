import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import { DropDownMenu } from './DropdownOptions';

describe("<Drop Down Menu>", () => {
  test("renders a menu", () => {
    render(<DropDownMenu class="test-class" />);

    expect(screen.getByRole("menu")).toHaveClass("test-class");
  });

  test("value prop sets content of drop down menu", () => {
    render(<DropDownMenu value="Please Select" />);

    expect(screen.getByRole("menu")).toHaveProperty("Please Select");
  });
});
