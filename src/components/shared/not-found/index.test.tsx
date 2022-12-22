import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { NotFound } from './index';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const alt = 'Test alt text';
    const description = 'Test description';
    const title = 'Test title';

    render(
      <NotFound iconSrc="" alt={alt} description={description} title={title} />,
    );

    expect(screen.getByAltText(new RegExp(alt, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
  });
});
