import { renderWithProviders, screen, userEvent } from '~/tests';

import { BookmarkButton } from './index';

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    renderWithProviders(
      <BookmarkButton
        size="large"
        isLoading={false}
        isFavorite={false}
        onClick={jest.fn()}
      />,
    );

    expect(
      screen.getByRole('button', { name: /To bookmarks/i }),
    ).toBeInTheDocument();
  });

  it('handleClick should be called', async () => {
    const handleClick = jest.fn();

    renderWithProviders(
      <BookmarkButton
        size="small"
        isLoading={false}
        isFavorite={false}
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole('button', { name: /To bookmarks/i });

    await userEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  it('handleClick should not be called', async () => {
    const handleClick = jest.fn();

    renderWithProviders(
      <BookmarkButton
        size="small"
        isLoading={true}
        isFavorite={false}
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole('button', { name: /To bookmarks/i });

    await userEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });
});
