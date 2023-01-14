import { renderWithProviders, screen } from '~/tests/render';
import { stateWithOffer } from '~/tests/store/offer';

import { WhatIsInside } from './what-is-inside';

describe('Component: Features', () => {
  it('should render correctly', () => {
    const { goods } = stateWithOffer.offer;

    renderWithProviders(<WhatIsInside goods={goods} />);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(goods.length);
  });
});
