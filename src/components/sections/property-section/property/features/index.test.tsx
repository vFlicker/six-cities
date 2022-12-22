import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeOffer } from '~/utils';

import { Features } from './index';

const { bedrooms, type, maxAdults } = makeOffer();

describe('Component: Features', () => {
  it('should render correctly', () => {
    render(
      <Features
        bedroomCount={bedrooms}
        type={type}
        maxAdultsCount={maxAdults}
      />,
    );

    expect(
      screen.getByText(new RegExp(bedrooms.toString(), 'i')),
    ).toBeInTheDocument();

    expect(screen.getByText(new RegExp(type, 'i'))).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(maxAdults.toString(), 'i')),
    ).toBeInTheDocument();
  });
});
