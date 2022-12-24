import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeOffer } from '~/utils';

import { WhatIsInside } from './index';

const { goods } = makeOffer();

describe('Component: Features', () => {
  it('should render correctly', () => {
    render(<WhatIsInside goods={goods} />);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(goods.length);
  });
});
