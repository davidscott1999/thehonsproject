import {render, fireEvent, screen} from '@testing-library/react'
import { Textbox } from './Textbox'

test('loads items eventually', async () => {
  render(<Textbox />)

  // Click button
  fireEvent.click(screen.getByText('Load'))

  // Wait for page to update with query text
  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)
})