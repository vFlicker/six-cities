import { offerStore, render, screen } from '~/tests';

import { Price } from './index';

describe('Component: Price', () => {
  it('should render correctly', () => {
    const { price } = offerStore.stateWithOffer.offer;

    render(<Price price={price} />);

    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(price.toString(), 'i')),
    ).toBeInTheDocument();
  });
});
