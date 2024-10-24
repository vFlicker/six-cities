import styled from '@emotion/styled';

import { withAttrs } from '~/shared/ui/withAttrs';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';

type LoginProps = {
  className?: string;
};

export function Login({ className }: LoginProps): JSX.Element {
  return (
    <section className={className}>
      <StyledTitle>Sign in</StyledTitle>
      <StyledForm action="#" method="post">
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
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledForm>
    </section>
  );
}

const StyledForm = styled.form`
  position: relative;
  display: grid;
  gap: 24px;
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
