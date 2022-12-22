import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { CityName, Reducer, SortType } from '~/constants';
import { makeOffer } from '~/utils';

import { HistoryRouter } from '../../shared';
import { MainSection } from './index';

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

const mockStore = configureMockStore();

const history = createMemoryHistory();

const offer = makeOffer();
const offers = [offer];

describe('Component: MainSection', () => {
  it('should render correctly', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        all: offers,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/places to stay in Amsterdam/i)).toHaveTextContent(
      offers.length.toString(),
    );

    expect(screen.getByText(/places to stay in Amsterdam/i)).toHaveTextContent(
      CityName.Amsterdam,
    );

    expect(screen.getByText(new RegExp(offer.title))).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('should render MainSectionEmptySection', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        all: [],
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(/No places to stay available/i),
    ).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        all: [],
        loading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        currentSortType: SortType.Popular,
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        all: [],
        loading: false,
        error: true,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
