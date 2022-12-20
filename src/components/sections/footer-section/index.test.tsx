import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HistoryRouter } from '../../shared/history-router';
import { FooterSection } from './index';

const history = createMemoryHistory();

describe('Component: FooterSection', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FooterSection />
      </HistoryRouter>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
