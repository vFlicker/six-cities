import { offerStore, renderWithProviders, screen } from '~/tests';

import { Gallery } from './index';

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    const { images } = offerStore.stateWithOffer.offer;

    renderWithProviders(<Gallery images={images} />);
    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
  });
});
