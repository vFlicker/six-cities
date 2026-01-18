import { z } from 'zod';

const RegisterMessage = {
  username: {
    min: 'Username must be at least 3 characters long',
    max: 'Username must be at most 255 characters long',
  },
  email: {
    invalid: 'Invalid email format',
  },
  password: {
    min: 'Password must be at least 8 characters long',
    max: 'Password must be at most 255 characters long',
  },
  passwordConfirmation: {
    mismatch: "Passwords don't match",
  },
};

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, RegisterMessage.username.min)
      .max(255, RegisterMessage.username.max)
      .transform((val) => val.trim()),
    email: z
      .email(RegisterMessage.email.invalid)
      .transform((val) => val.trim().toLowerCase()),
    password: z
      .string()
      .min(8, RegisterMessage.password.min)
      .max(255, RegisterMessage.password.max),
    passwordConfirmation: z
      .string()
      .min(8, RegisterMessage.password.min)
      .max(255, RegisterMessage.password.max),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: RegisterMessage.passwordConfirmation.mismatch,
    path: ['passwordConfirmation'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
