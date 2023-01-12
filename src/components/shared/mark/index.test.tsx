import { renderWithProviders, screen } from '~/tests';

import { Mark } from './index';

describe('Component: Mark', () => {
  it('should render correctly', () => {
    renderWithProviders(<Mark type="big" />);
    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
