'use server';

import { redirect } from 'next/navigation';

import { authApiService } from '~/entities/auth';
import { isApiError } from '~/shared/lib/api';
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
  if (isApiError(parsedData)) {
    return { values, error: parsedData };
  }

  const result = await authApiService.register(parsedData);
  if (isApiError(result)) {
    return { values, error: result };
  }

  redirect(AppRoute.Login);
};
