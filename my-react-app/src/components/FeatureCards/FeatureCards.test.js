import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import { FeatureCards } from './FeatureCards';

describe("<Feature Card>", () => {
  test("renders a card", () => {
    render(<FeatureCards class="test-class" />);

    expect(screen.getByRole("card")).toHaveClass("test-class");
  });

  test("renders an image prop", () => {
    render(<FeatureCards src="test.png" />);

    expect(screen.getByRole("card")).toHaveAttribute("image");
  });

  test("heading prop sets text content of info card", () => {
    render(<FeatureCards heading="heading" />);

    expect(screen.getByRole("card")).toHaveTextContent("heading");
  });
});
