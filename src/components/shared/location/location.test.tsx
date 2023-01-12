import { CityName } from '~/constants';
import { renderWithProviders, screen, userEvent } from '~/tests';

import { Location } from './location';

describe('Component: Location', () => {
  it('should render correctly', () => {
    renderWithProviders(<Location cityName={CityName.Brussels} />);

    expect(
      screen.getByText(new RegExp(CityName.Brussels, 'i')),
    ).toBeInTheDocument();
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    renderWithProviders(
      <Location cityName={CityName.Brussels} onClick={handleClick} />,
    );

    await userEvent.click(screen.getByText(new RegExp(CityName.Brussels, 'i')));

    expect(handleClick).toBeCalledTimes(1);
  });
});
