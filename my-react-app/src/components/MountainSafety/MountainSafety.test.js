import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import MunroSafety from './MunroSafety';

describe("<Munro Safety>", () => {
  test("renders munro details", () => {
    render(<MunroSafety class="test-class" />);

    expect(screen.getByRole("contentInfo")).toHaveClass("test-class");
  });

  test("loads items eventually", async () => {
    render(<MunroSafety />);

    // Click button
    fireEvent.click(screen.getByText("Load"));

    // Wait for page to update with query text
    const items = await screen.findAllByText(/Item #[0-9]: /);
    expect(items).toHaveLength(10);
  });
});
