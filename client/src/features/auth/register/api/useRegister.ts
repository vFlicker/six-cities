import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';

import { authApi, authModel, RegisterData } from '~/entities/auth';
import { AppRoute } from '~/shared/libs/router';
import { saveToken } from '~/shared/libs/token';

export const useRegister = () => {
  const { useAuthStore, AuthStatus } = authModel;

  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const redirectToRoute = useAuthStore((state) => state.redirectToRoute);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: authApi.register,
    onSuccess({ token }) {
      saveToken(token);
      setAuthenticated(AuthStatus.Authenticated);
      redirectToRoute(AppRoute.Root);
    },
    onError: () => {
      setAuthenticated(AuthStatus.Unauthenticated);
    },
  });

  const handleRegister = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const data = Object.fromEntries(formData.entries()) as RegisterData;

    mutate(data);
  };

  return {
    isPending,
    isError,
    error,
    handleRegister,
  };
};
