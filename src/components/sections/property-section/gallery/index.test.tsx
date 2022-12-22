import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeOffer } from '~/utils';

import { Gallery } from './index';

const { images } = makeOffer();

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    render(<Gallery images={images} />);

    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
  });
});
