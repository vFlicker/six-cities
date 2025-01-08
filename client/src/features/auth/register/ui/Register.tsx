import styled from '@emotion/styled';

import { AuthRedirect } from '~/shared/ui/AuthRedirect';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { useRegister } from '../api/useRegister';

type RegisterProps = {
  className?: string;
};

function Register({ className }: RegisterProps): JSX.Element {
  const { handleRegister } = useRegister();

  return (
    <section className={className}>
      <StyledTitle>Sign up</StyledTitle>
      <StyledForm action="#" method="post" onSubmit={handleRegister}>
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
