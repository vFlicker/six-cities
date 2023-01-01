import { offerStore, render, screen } from '~/tests';

import { WhatIsInside } from './index';

describe('Component: Features', () => {
  it('should render correctly', () => {
    const { goods } = offerStore.stateWithOffer.offer;

    render(<WhatIsInside goods={goods} />);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(goods.length);
  });
});
