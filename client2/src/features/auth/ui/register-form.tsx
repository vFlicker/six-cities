'use client';

import { JSX, useActionState } from 'react';

import { getFieldError } from '~/shared/lib/api';
import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Alert } from '~/shared/ui/atoms';
import { AuthRedirect, Input } from '~/shared/ui/molecules';

import { registerUser } from '../api/auth-actions';
import { initialRegisterState } from '../model/register-state';
import { RegisterSubmit } from './register-submit';

type RegisterProps = {
  className?: string;
};

export function RegisterForm({ className }: RegisterProps): JSX.Element {
  const [state, formAction] = useActionState(
    registerUser,
    initialRegisterState,
  );

  const { values, error } = state;

  return (
    <section className={cn(className)}>
      <h1 className={titleClasses}>Sign up</h1>

      <form className={formClasses} action={formAction}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          defaultValue={values.username}
          errorMessage={getFieldError('username', error.details)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={values.email}
          errorMessage={getFieldError('email', error.details)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          errorMessage={getFieldError('password', error.details)}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Password confirmation"
          errorMessage={getFieldError('passwordConfirmation', error.details)}
        />

        {error.message && <Alert variant="error">{error.message}</Alert>}

        <RegisterSubmit />
      </form>

      <AuthRedirect
        href={AppRoute.Login}
        text="Already have an account?"
        label="Sign in"
      />
    </section>
  );
}

const titleClasses = cn('mb-7 text-3xl font-bold italic');
const formClasses = cn('relative mb-2 grid w-80 gap-5');
