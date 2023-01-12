import { offerStore, renderWithProviders, screen } from '~/tests';

import { Host } from './host';

describe('Component: Host', () => {
  it('should render correctly', () => {
    const { description, host } = offerStore.stateWithOffer.offer;
    const { name, isPro } = host;

    renderWithProviders(
      <Host authorName={name} description={description} isPro={isPro} />,
    );

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByAltText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
  });
});
