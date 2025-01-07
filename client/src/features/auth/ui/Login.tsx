import styled from '@emotion/styled';
import { useMutation } from '@tanstack/react-query';
import { FormEvent } from 'react';

import { authApi, AuthData, authModel } from '~/entities/auth';
import { AppRoute } from '~/shared/libs/router';
import { saveToken } from '~/shared/libs/token';
import { AuthRedirect } from '~/shared/ui/AuthRedirect';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type LoginProps = {
  className?: string;
};

function Login({ className }: LoginProps): JSX.Element {
  const setAuthenticated = authModel.useAuthStore(
    (state) => state.setAuthenticated,
  );
  const redirectToRoute = authModel.useAuthStore(
    (state) => state.redirectToRoute,
  );

  const { mutate /* TODO: , isPending, isError, error */ } = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ token }) => {
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
    const authData = Object.fromEntries(formData.entries()) as AuthData;

    mutate(authData);
  };

  return (
    <section className={className}>
      <StyledTitle>Sign in</StyledTitle>
      <StyledForm action="#" method="post" onSubmit={handleSubmit}>
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
        <AuthRedirect
          to="/register"
          text="Don't have an account?"
          label="Sign up"
        />
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledForm>
    </section>
  );
}

export { Login };

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
