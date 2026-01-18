'use server';

import { redirect } from 'next/navigation';

import { authApiService } from '~/entities/auth';
import { ErrorDetail } from '~/shared/lib/api';
import { AppRoute } from '~/shared/lib/router';
import { parseFormData } from '~/shared/lib/validation';

import { registerSchema } from '../model/register-schema';

export type RegisterActionState = {
  values: {
    username: string;
    email: string;
  };
  error: string | null;
  errors: ErrorDetail[] | null;
};

export const registerUser = async (
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> => {
  const rawData = Object.fromEntries(formData.entries());
  const parsed = parseFormData(rawData, registerSchema);

  if (!parsed.success) {
    return {
      values: {
        username: (rawData.username as string) || '',
        email: (rawData.email as string) || '',
      },
      error: null,
      errors: parsed.errors,
    };
  }

  const result = await authApiService.register(parsed.data);
  if ('validationErrors' in result) {
    return {
      values: {
        username: parsed.data.username,
        email: parsed.data.email,
      },
      error: null,
      errors: result.validationErrors,
    };
  }

  if ('errorMessage' in result) {
    return {
      values: {
        username: parsed.data.username,
        email: parsed.data.email,
      },
      error: result.errorMessage,
      errors: null,
    };
  }

  redirect(AppRoute.Login);
};
