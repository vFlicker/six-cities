import { offerStore, renderWithProviders, screen } from '~/tests';

import { WhatIsInside } from './what-is-inside';

describe('Component: Features', () => {
  it('should render correctly', () => {
    const { goods } = offerStore.stateWithOffer.offer;

    renderWithProviders(<WhatIsInside goods={goods} />);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(goods.length);
  });
});
