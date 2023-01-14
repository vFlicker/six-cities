import { renderWithProviders, screen } from '~/tests/render';
import { stateWithOffer } from '~/tests/store/offer';

import { Host } from './host';

describe('Component: Host', () => {
  it('should render correctly', () => {
    const { description, host } = stateWithOffer.offer;
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
