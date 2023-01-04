import { offerStore, render, screen } from '~/tests';

import { Gallery } from './index';

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    const { images } = offerStore.stateWithOffer.offer;

    render(<Gallery images={images} />);
    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
  });
});
