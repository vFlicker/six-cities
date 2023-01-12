import { offerStore, renderWithProviders, screen } from '~/tests';

import { Price } from './price';

describe('Component: Price', () => {
  it('should render correctly', () => {
    const { price } = offerStore.stateWithOffer.offer;

    renderWithProviders(<Price price={price} />);

    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(price.toString(), 'i')),
    ).toBeInTheDocument();
  });
});
