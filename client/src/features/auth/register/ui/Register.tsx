import styled from '@emotion/styled';

import { AuthRedirect } from '~/shared/ui/AuthRedirect';
import { Button } from '~/shared/ui/Button';
import { ErrorBlock } from '~/shared/ui/ErrorBlock';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { useRegister } from '../api/useRegister';

type RegisterProps = {
  className?: string;
};

function Register({ className }: RegisterProps): JSX.Element {
  const { handleRegister, isError, error, fieldErrors, isPending, register } =
    useRegister();

  return (
    <section className={className}>
      <StyledTitle>Sign up</StyledTitle>
      <StyledForm onSubmit={handleRegister}>
        <Input
          {...register('username')}
          type="text"
          name="username"
          aria-label="Username"
          placeholder="Username"
          errorMessage={fieldErrors.username?.message}
        />
        <Input
          {...register('email')}
          type="text"
          name="email"
          aria-label="E-mail"
          placeholder="Email"
          errorMessage={fieldErrors.email?.message}
        />
        <Input
          {...register('password')}
          type="password"
          name="password"
          aria-label="Password"
          placeholder="Password"
          errorMessage={fieldErrors.password?.message}
        />
        <Input
          {...register('passwordConfirmation')}
          type="password"
          name="passwordConfirmation"
          aria-label="Password confirmation"
          placeholder="Password confirmation"
          errorMessage={fieldErrors.passwordConfirmation?.message}
        />
        <AuthRedirect
          to="/login"
          text="Already have an account?"
          label="Sign in"
        />

        {isError && <ErrorBlock message={error?.message} />}

        <StyledButton type="submit" disabled={isPending}>
          Sign up
        </StyledButton>
      </StyledForm>
    </section>
  );
}

export { Register };

const StyledForm = styled.form`
  position: relative;
  display: grid;
  gap: 20px;
  width: 340px;
  z-index: 1;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledTitle = withAttrs(
  {
    as: 'h1',
    variant: TypographyVariant.TITLE_2,
  },
  Typography,
);
