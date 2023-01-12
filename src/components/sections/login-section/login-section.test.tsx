import { renderWithProviders, screen, userEvent } from '~/tests';

import { LoginSection } from './login-section';

const mockEmail = 'test@gmail.com';
const mockPassword = 'password';

describe('Component: LoginSection', () => {
  it('should render correctly', () => {
    renderWithProviders(<LoginSection />);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
  });

  it('form inputs should work correctly', async () => {
    renderWithProviders(<LoginSection />);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');

    await userEvent.type(emailInput, mockEmail);
    await userEvent.type(passwordInput, mockPassword);

    expect(
      screen.getByDisplayValue(new RegExp(mockEmail, 'i')),
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue(new RegExp(mockPassword, 'i')),
    ).toBeInTheDocument();
  });

  it('form should not be sended when inputs are empty', async () => {
    const { store } = renderWithProviders(<LoginSection />);

    const button = screen.getByRole('button', { name: /Sign in/i });
    await userEvent.click(button);

    const [firstAction] = store.getActions();
    expect(firstAction).toBeUndefined();
  });

  it('form should be sended', async () => {
    const { store } = renderWithProviders(<LoginSection />);

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const button = screen.getByRole('button', { name: /Sign in/i });

    await userEvent.type(emailInput, mockEmail);
    await userEvent.type(passwordInput, mockPassword);
    await userEvent.click(button);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_LOGIN_ACTION',
      payload: {
        email: mockEmail,
        password: mockPassword,
      },
    });
  });
});
