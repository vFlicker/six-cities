import { authApi, authModel } from '~/entities/auth';
import { queryClient } from '~/shared/api';
import { dropToken } from '~/shared/libs/token';

export const checkUserAuthentication = async () => {
  const state = authModel.useAuthStore.getState();
  const { Authenticated, Unauthenticated } = authModel.AuthStatus;

  try {
    await queryClient.fetchQuery({
      queryKey: ['active-user'],
      queryFn: authApi.checkAuthStatus,
    });

    state.setAuthenticated(Authenticated);
  } catch {
    state.setAuthenticated(Unauthenticated);
    dropToken();
  }
};
