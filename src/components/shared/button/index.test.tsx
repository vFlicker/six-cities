import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './index';

describe('Component: Button', () => {
  it('should render correctly,', () => {
    render(<Button>Test text</Button>);

    expect(screen.getByText(/Test text/i));
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Test text</Button>);

    await userEvent.click(screen.getByRole('button'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
