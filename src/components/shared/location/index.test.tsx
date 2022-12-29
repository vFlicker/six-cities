import { CityName } from '~/constants';
import { render, screen, userEvent } from '~/tests';

import { Location } from './index';

describe('Component: Location', () => {
  it('should render correctly', () => {
    render(<Location cityName={CityName.Brussels} />);

    expect(
      screen.getByText(new RegExp(CityName.Brussels, 'i')),
    ).toBeInTheDocument();
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    render(<Location cityName={CityName.Brussels} onClick={handleClick} />);

    await userEvent.click(screen.getByText(new RegExp(CityName.Brussels, 'i')));

    expect(handleClick).toBeCalledTimes(1);
  });
});
