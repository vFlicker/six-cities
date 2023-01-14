import { renderWithProviders, screen } from '~/tests/render';
import { stateWithOffer } from '~/tests/store/offer';

import { Price } from './price';

describe('Component: Price', () => {
  it('should render correctly', () => {
    const { price } = stateWithOffer.offer;

    renderWithProviders(<Price price={price} />);

    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(price.toString(), 'i')),
    ).toBeInTheDocument();
  });
});
