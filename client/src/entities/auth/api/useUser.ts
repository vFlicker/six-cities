import { useQuery } from '@tanstack/react-query';

import { authApi } from './authApi';

export const useUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ['active-user'],
    queryFn: authApi.checkAuthStatus,
  });

  return { user: data, isUserPending: isPending };
};
