import { render, screen, userEvent } from '~/tests';

import { Button } from './index';

describe('Component: Button', () => {
  it('should render correctly', () => {
    render(<Button>Test text</Button>);
    expect(screen.getByText(/Test text/i)).toBeInTheDocument();
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Test text</Button>);

    await userEvent.click(screen.getByText(/Test text/i));

    expect(handleClick).toBeCalledTimes(1);
  });
});
