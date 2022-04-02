import {render, fireEvent, screen} from '@testing-library/react'

test('loads items eventually', async () => {
  render(<footer />)

  // Click button
  fireEvent.click(screen.getByText('Load'))

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})