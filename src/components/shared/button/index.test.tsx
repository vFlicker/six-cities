import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './index';

describe('Component: Button', () => {
  it('should render correctly,', async () => {
    const mockCallback = jest.fn();

    render(<Button onClick={mockCallback}>Test text</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(mockCallback.mock.calls.length).toBe(1);
    expect(screen.getByText(/Test text/i));
  });
});
