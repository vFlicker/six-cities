'use server';

import { redirect } from 'next/navigation';

import { authApiService, RegisterData } from '~/entities/auth';
import { AppRoute } from '~/shared/lib/router';

export const registerUser = async (data: FormData): Promise<void> => {
  const registerData: RegisterData = {
    username: data.get('username') as string,
    email: data.get('email') as string,
    password: data.get('password') as string,
    passwordConfirmation: data.get('passwordConfirmation') as string,
  };

  await authApiService.register(registerData);
  redirect(AppRoute.Login);
};
