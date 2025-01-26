import { z } from 'zod';

export const registerSchema = z
  .object({
    username: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    passwordConfirmation: z.string().min(8).max(255),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
