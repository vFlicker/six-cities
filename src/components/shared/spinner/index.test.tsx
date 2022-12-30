import { render, screen } from '~/tests';

import { Spinner } from './index';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
