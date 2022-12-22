import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { HistoryRouter } from '../../shared';
import { NearPlacesSection } from './index';

const PAGE_ID = '10';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useParams: () => ({
      id: PAGE_ID,
    }),
  };
});

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    offersSlice: {
      ...originalModule.offersSlice,
      fetchOffersNearby: (id: number) => ({
        type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
        payload: id,
      }),
    },
  };
});

const mockStore = configureMockStore();

const history = createMemoryHistory();

const offer = makeOffer();
const offers = [offer];

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        nearby: offers,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlacesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Other places in the neighborhood/i))
      .toBeInTheDocument;

    expect(screen.getByText(new RegExp(offer.title))).toBeInTheDocument();
  });

  it('should dispatch fetchOffersNearby on component loaded', () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        nearby: offers,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlacesSection />
        </HistoryRouter>
      </Provider>,
    );

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
      payload: Number(PAGE_ID),
    });
  });

  it("should't be render", () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        nearby: [],
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlacesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.queryByText(/No places to stay available/i),
    ).not.toBeInTheDocument();
  });

  it('should render Loader', () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        nearby: [],
        loading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlacesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        nearby: [],
        loading: false,
        error: true,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NearPlacesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
