import { CityName, Reducer } from '~/constants';
import { appStore, offersStore, render, RenderOptions, screen } from '~/tests';

import { MainSection } from './index';

describe('Component: MainSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
      },
    };

    render(<MainSection />, renderOptions);

    const title = screen.getByText(/places to stay in/i);
    const placeCount = offersStore.stateWithOffers.all.length.toString();
    const [offer] = offersStore.stateWithOffers.all;

    expect(title).toHaveTextContent(placeCount);
    expect(title).toHaveTextContent(CityName.Amsterdam);
    expect(screen.getByText(new RegExp(offer.title))).toBeInTheDocument();
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });

  it('should render MainSectionEmptySection', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.initialState,
      },
    };

    render(<MainSection />, renderOptions);

    expect(
      screen.getByText(/No places to stay available/i),
    ).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.loadingState,
      },
    };

    render(<MainSection />, renderOptions);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.rejectedState,
      },
    };

    render(<MainSection />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
