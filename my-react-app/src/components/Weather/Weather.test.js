import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { Weather } from './Weather';

test("loads items eventually", async () => {
  render(<Weather />);

  // Click button
  fireEvent.click(screen.getByText("Load"));

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});
