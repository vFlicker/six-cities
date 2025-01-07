import styled from '@emotion/styled';

import { AuthRedirect } from '~/shared/ui/AuthRedirect';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { useLogin } from '../useLogin';

type LoginProps = {
  className?: string;
};

function Login({ className }: LoginProps): JSX.Element {
  const { handleLogin } = useLogin();

  return (
    <section className={className}>
      <StyledTitle>Sign in</StyledTitle>
      <StyledForm action="#" method="post" onSubmit={handleLogin}>
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
