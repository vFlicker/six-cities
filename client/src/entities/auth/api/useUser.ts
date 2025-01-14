import { useQuery } from '@tanstack/react-query';

import { getIsAuthenticated, useAuthStore } from '../model/authModel';
import { authApi } from './authApi';

export const useUser = () => {
  const isAuthenticated = useAuthStore(getIsAuthenticated);

  const { data, isPending } = useQuery({
    queryKey: ['active-user'],
    queryFn: authApi.checkAuthStatus,
    enabled: isAuthenticated,
  });

  return { user: data, isUserPending: isPending };
};
