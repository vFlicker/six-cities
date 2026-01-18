'use client';

import { JSX, useActionState } from 'react';

import { getFieldError } from '~/shared/lib/api';
import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Alert } from '~/shared/ui/atoms';
import { AuthRedirect, Input } from '~/shared/ui/molecules';

import { RegisterActionState, registerUser } from '../api/auth-actions';
import { RegisterSubmit } from './register-submit';

type RegisterProps = {
  className?: string;
};

const initialRegisterState: RegisterActionState = {
  values: { username: '', email: '' },
  error: null,
  errors: null,
};

export function RegisterForm({ className }: RegisterProps): JSX.Element {
  const [state, formAction] = useActionState(
    registerUser,
    initialRegisterState,
  );

  return (
    <section className={cn(className)}>
      <h1 className={titleClasses}>Sign up</h1>

      <form className={formClasses} action={formAction}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          defaultValue={state.values.username}
          errorMessage={getFieldError('username', state.errors)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={state.values.email}
          errorMessage={getFieldError('email', state.errors)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          errorMessage={getFieldError('password', state.errors)}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Password confirmation"
          errorMessage={getFieldError('passwordConfirmation', state.errors)}
        />

        {state.error && <Alert variant="error">{state.error}</Alert>}

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
