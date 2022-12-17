import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { Map } from './index';

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

const offers = [makeOffer(), makeOffer()];

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    activeCardId: offers[0].id,
  },
});

// TODO: add tests.
describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Map offers={offers} orientation="horizontal" />
      </Provider>,
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
