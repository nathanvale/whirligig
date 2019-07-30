import React from 'react'
import {render} from '@testing-library/react'
import {Button} from '../button'

test('renders a styled button with text', () => {
  const testMessage = 'Test Message'
  const {container} = render(<Button>{testMessage}</Button>)
  expect(container.firstChild).toMatchSnapshot()
})
