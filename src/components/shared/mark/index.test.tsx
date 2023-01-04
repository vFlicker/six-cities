import { render, screen } from '~/tests';

import { Mark } from './index';

describe('Component: Mark', () => {
  it('should render correctly', () => {
    render(<Mark type="big" />);
    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
