import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Mark } from './index';

describe('Component: Mark', () => {
  it('should render correctly', () => {
    render(<Mark type="big" isPremium />);

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });

  it("should't be render", () => {
    render(<Mark type="big" isPremium={false} />);

    expect(screen.queryByText(/Premium/i)).not.toBeInTheDocument();
  });
});
