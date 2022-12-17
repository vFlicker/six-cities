import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { CityName } from '~/constants';

import { HistoryRouter } from '../history-router';
import { Location } from './index';

const history = createMemoryHistory();

describe('Component: Location', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Location cityName={CityName.Brussels} />
      </HistoryRouter>,
    );

    expect(
      screen.getByText(new RegExp(CityName.Brussels, 'i')),
    ).toBeInTheDocument();
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    render(
      <HistoryRouter history={history}>
        <Location cityName={CityName.Brussels} onClick={handleClick} />
      </HistoryRouter>,
    );

    await userEvent.click(screen.getByText(new RegExp(CityName.Brussels, 'i')));

    expect(handleClick).toBeCalledTimes(1);
  });
});
