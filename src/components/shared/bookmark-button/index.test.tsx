import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { BookmarkButton } from './index';

describe('Component: BookmarkButton', () => {
  it('should render correctly,', async () => {
    const mockCallback = jest.fn();

    render(
      <BookmarkButton
        size="large"
        isLoading={false}
        isFavorite={false}
        onClick={mockCallback}
      />,
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    // TODO: check color and size
    expect(button).toBeEnabled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(screen.getByText(/To bookmarks/i));
  });

  it('should render correctly', async () => {
    const mockCallback = jest.fn();

    render(
      <BookmarkButton
        size="small"
        isLoading={true}
        isFavorite={true}
        onClick={mockCallback}
      />,
      {},
    );

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(button).toBeDisabled();
    // TODO: check color and size
    // expect(screen.getByRole('svg')).toHaveStyle('#979797');
    expect(mockCallback.mock.calls.length).toBe(0);
    expect(screen.getByText(/To bookmarks/i));
  });
});
