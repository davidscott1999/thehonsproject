import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import { Cards } from './Cards';

describe("<Cards>", () => {
  test("renders a card", () => {
    render(<Cards class="test-class" />);

    expect(screen.getByRole("contentInfo")).toHaveClass("test-class");
  });

  test("renders an image prop", () => {
    render(<Cards src="test.png" />);

    expect(screen.getByRole("contentInfo")).toHaveAttribute("image");
  });

  test("heading prop sets text content of progress bar", () => {
    render(<Cards heading="heading" />);

    expect(screen.getByRole("navigation")).toHaveTextContent("heading");
  });
});
