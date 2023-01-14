import { renderWithProviders, screen } from '~/tests/render';
import { stateWithOffer } from '~/tests/store/offer';

import { Gallery } from './gallery';

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    const { images } = stateWithOffer.offer;

    renderWithProviders(<Gallery images={images} />);
    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
  });
});
