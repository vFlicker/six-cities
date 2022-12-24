import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeOffer } from '~/utils';

import { Price } from './index';

const { price } = makeOffer();

describe('Component: Price', () => {
  it('should render correctly', () => {
    render(<Price price={price} />);

    expect(screen.getByText(/night/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(price.toString(), 'i')),
    ).toBeInTheDocument();
  });
});
