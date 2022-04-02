import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { MunroList } from './MunroList';

describe("<Munro List>", () => {
  test("renders munro list", () => {
    render(<MunroList class="test-class" />);

    expect(screen.getByRole("list")).toHaveClass("test-class");
  });

  test("loads items eventually", async () => {
    render(<MunroList />);

    // Click button
    fireEvent.click(screen.getByText("Load"));

    // Wait for page to update with query text
    const items = await screen.findAllByText(/Item #[0-9]: /);
    expect(items).toHaveLength(10);
  });
});
