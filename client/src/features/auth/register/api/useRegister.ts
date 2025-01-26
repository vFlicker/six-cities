import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { authApi, authModel } from '~/entities/auth';
import { AppRoute } from '~/shared/libs/router';
import { saveToken } from '~/shared/libs/token';

import { RegisterSchema, registerSchema } from '../model/registerSchema';

export const useRegister = () => {
  const { useAuthStore, AuthStatus } = authModel;

  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const redirectToRoute = useAuthStore((state) => state.redirectToRoute);

  const resolver = zodResolver(registerSchema);
  const form = useForm<RegisterSchema>({ resolver });

  const mutation = useMutation({
    mutationFn: authApi.register,
    onSuccess({ token }) {
      form.reset();
      saveToken(token);
      setAuthenticated(AuthStatus.Authenticated);
      redirectToRoute(AppRoute.Root);
    },
    onError: () => {
      setAuthenticated(AuthStatus.Unauthenticated);
    },
  });

  return {
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    fieldErrors: form.formState.errors,
    register: form.register,
    handleRegister: form.handleSubmit((data) => mutation.mutate(data)),
  };
};
