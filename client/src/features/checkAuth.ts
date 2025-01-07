import { authApi, authModel } from '~/entities/auth';
import { queryClient } from '~/shared/api';

export async function checkAuth(store: any) {
  try {
    await queryClient.fetchQuery({
      queryKey: ['checkAuthStatus'],
      queryFn: authApi.checkAuthStatus,
    });
    store.dispatch(
      authModel.changeAuthStatus(authModel.AuthStatus.Authenticated),
    );
  } catch {
    store.dispatch(
      authModel.changeAuthStatus(authModel.AuthStatus.Unauthenticated),
    );
  }
}
