import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';

import { authApi, AuthData, authModel } from '~/entities/auth';
import { AppRoute } from '~/shared/libs/router';
import { saveToken } from '~/shared/libs/token';

export const useLogin = () => {
  const { useAuthStore, AuthStatus } = authModel;

  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const redirectToRoute = useAuthStore((state) => state.redirectToRoute);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ token }) => {
      saveToken(token);
      setAuthenticated(AuthStatus.Authenticated);
      redirectToRoute(AppRoute.Root);
    },
    onError: () => {
      setAuthenticated(AuthStatus.Unauthenticated);
    },
  });

  const handleLogin = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const authData = Object.fromEntries(formData.entries()) as AuthData;

    mutate(authData);
  };

  return {
    isPending,
    isError,
    error,
    handleLogin,
  };
};
