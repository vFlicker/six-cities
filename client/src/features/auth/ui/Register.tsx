import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';

import { authApi, RegisterData } from '~/entities/auth';
import { authModel } from '~/entities/auth';
import { AppRoute } from '~/shared/libs/router';
import { saveToken } from '~/shared/libs/token';
import { AuthRedirect } from '~/shared/ui/AuthRedirect';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type RegisterProps = {
  className?: string;
};

function Register({ className }: RegisterProps): JSX.Element {
  const setAuthenticated = authModel.useAuthStore(
    (state) => state.setAuthenticated,
  );

  const redirectToRoute = authModel.useAuthStore(
    (state) => state.redirectToRoute,
  );

  const { mutate } = useMutation({
    mutationFn: authApi.register,
    onSuccess({ token }) {
      saveToken(token);
      setAuthenticated(authModel.AuthStatus.Authenticated);
      redirectToRoute(AppRoute.Root);
    },
    onError: () => {
      setAuthenticated(authModel.AuthStatus.Unauthenticated);
    },
  });

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const data = Object.fromEntries(formData.entries()) as RegisterData;

    mutate(data);
  };

  return (
    <section className={className}>
      <StyledTitle>Sign up</StyledTitle>
      <StyledForm action="#" method="post" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          aria-label="Username"
          placeholder="Username"
          required
        />
        <Input
          type="email"
          name="email"
          aria-label="E-mail"
          placeholder="Email"
          required
        />
        <Input
          type="password"
          name="password"
          aria-label="Password"
          placeholder="Password"
          required
        />
        <Input
          type="password"
          name="passwordConfirmation"
          aria-label="Password confirmation"
          placeholder="Password confirmation"
          required
        />
        <AuthRedirect
          to="/login"
          text="Already have an account?"
          label="Sign in"
        />
        <StyledButton type="submit">Sign up</StyledButton>
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
