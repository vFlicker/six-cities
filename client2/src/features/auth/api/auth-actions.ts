'use server';

import { redirect } from 'next/navigation';

import { authApiService } from '~/entities/auth';
import { AppRoute } from '~/shared/lib/router';
import { parseFormData } from '~/shared/lib/validation';

import { registerSchema } from '../model/register-schema';
import { RegisterActionState } from '../model/register-state';

export const registerUser = async (
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> => {
  const rawData = Object.fromEntries(formData.entries());
  const values = {
    username: String(rawData.username ?? ''),
    email: String(rawData.email ?? ''),
  };

  const parsedData = parseFormData(rawData, registerSchema);
  if (parsedData.isLeft()) {
    return { values, error: parsedData.value };
  }

  const result = await authApiService.register(parsedData.value);
  if (result.isLeft()) {
    return { values, error: result.value };
  }

  redirect(AppRoute.Login);
};
