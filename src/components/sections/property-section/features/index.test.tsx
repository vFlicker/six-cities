import { offerStore, render, screen } from '~/tests';

import { Features } from './index';

describe('Component: Features', () => {
  it('should render correctly', () => {
    const { bedrooms, type, maxAdults } = offerStore.stateWithOffer.offer;

    render(
      <Features
        bedroomCount={bedrooms}
        type={type}
        maxAdultsCount={maxAdults}
      />,
    );

    expect(screen.getByText(/bedrooms/i)).toHaveTextContent(
      bedrooms.toString(),
    );
    expect(screen.getByText(new RegExp(type, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/adults/i)).toHaveTextContent(maxAdults.toString());
  });
});