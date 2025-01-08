import { authModel } from '~/entities/auth';
import { dropToken } from '~/shared/libs/token';

export const useLogout = () => {
  const { useAuthStore, AuthStatus } = authModel;

  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const handleLogout = () => {
    setAuthenticated(AuthStatus.Unauthenticated);
    dropToken();
  };

  return { handleLogout };
};
