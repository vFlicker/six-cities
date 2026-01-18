import { ApiError } from '~/shared/lib/api';

export type RegisterActionState = {
  values: { username: string; email: string };
  error: ApiError;
};

export const initialRegisterState: RegisterActionState = {
  values: { username: '', email: '' },
  error: { type: '', message: '', details: [] },
};
