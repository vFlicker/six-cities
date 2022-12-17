import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BookmarkButton } from './index';

describe('Component: BookmarkButton', () => {
  it('should render correctly', () => {
    render(
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

    render(
      <BookmarkButton
        size="small"
        isLoading={false}
        isFavorite={false}
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole('button', { name: /To bookmarks/i });

    await userEvent.click(button);

    expect(button).toBeEnabled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it("handleClick should'n be called", async () => {
    const handleClick = jest.fn();

    render(
      <BookmarkButton
        size="small"
        isLoading={true}
        isFavorite={false}
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole('button', { name: /To bookmarks/i });

    await userEvent.click(button);

    expect(button).toBeDisabled();
    expect(handleClick).toBeCalledTimes(0);
  });
});
