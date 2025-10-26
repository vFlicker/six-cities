import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Button } from '~/shared/ui/atoms';
import { AuthRedirect, Input } from '~/shared/ui/molecules';

import { registerUser } from '../api/auth-actions';

type RegisterProps = {
  className?: string;
};

export function RegisterForm({ className }: RegisterProps): JSX.Element {
  // const { handleRegister, isError, error, fieldErrors, isPending, register } =
  //   useRegister();

  return (
    <section className={cn(className)}>
      <h1 className={titleClasses}>Sign up</h1>

      <form className={formClasses} action={registerUser}>
        <Input
          // {...register('username')}
          type="text"
          name="username"
          aria-label="Username"
          placeholder="Username"
          // errorMessage={fieldErrors.username?.message}
        />
        <Input
          // {...register('email')}
          type="text"
          name="email"
          aria-label="E-mail"
          placeholder="Email"
          // errorMessage={fieldErrors.email?.message}
        />
        <Input
          // {...register('password')}
          type="password"
          name="password"
          aria-label="Password"
          placeholder="Password"
          // errorMessage={fieldErrors.password?.message}
        />
        <Input
          // {...register('passwordConfirmation')}
          type="password"
          name="passwordConfirmation"
          aria-label="Password confirmation"
          placeholder="Password confirmation"
          // errorMessage={fieldErrors.passwordConfirmation?.message}
        />

        {/* {isError && <Error message={error?.message} />} */}

        <Button
          type="submit"
          className={buttonClasses}
          // disabled={isPending}
        >
          Sign up
        </Button>
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
const buttonClasses = cn('w-full');
