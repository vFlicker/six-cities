import { authModel } from '~/entities/auth';
import { dropToken } from '~/shared/libs/token';
import { TextButton } from '~/shared/ui/TextButton';

function Logout(): JSX.Element {
  const setAuthenticated = authModel.useAuthStore(
    (state) => state.setAuthenticated,
  );

  const handleLogout = () => {
    setAuthenticated(authModel.AuthStatus.Unauthenticated);
    dropToken();
  };

  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}

export { Logout };
