import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeOffer } from '~/utils';

import { Host } from './index';

const {
  description,
  host: { avatarUrl, isPro, name },
} = makeOffer();

describe('Component: Host', () => {
  it('should render correctly', () => {
    render(
      <Host
        authorName={name}
        avatarUrl={avatarUrl}
        description={description}
        isPro={isPro}
      />,
    );

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
  });
});
