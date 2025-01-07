import { authApi, authModel } from '~/entities/auth';
import { queryClient } from '~/shared/api';

export const checkUserAuthentication = async () => {
  const state = authModel.useAuthStore.getState();
  const { Authenticated, Unauthenticated } = authModel.AuthStatus;

  try {
    await queryClient.fetchQuery({
      queryKey: ['checkAuthStatus'],
      queryFn: authApi.checkAuthStatus,
    });
    state.setAuthenticated(Authenticated);
  } catch {
    state.setAuthenticated(Unauthenticated);
  }
};
