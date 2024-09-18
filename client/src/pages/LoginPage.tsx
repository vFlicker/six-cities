import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Button } from '~/elements/Button';
import { Input } from '~/elements/Input';
import { SlantedLink } from '~/elements/SlantedButton';
import { Typography, TypographyVariant } from '~/elements/Typography';
import { Container } from '~/helpers/Container';
import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/tokens/colors';

function LoginPage(): JSX.Element {
  return (
    <StyledMain>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <StyledContainer>
        <StyledLogin>
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
        </StyledLogin>
        <StyledLocation>
          <StyledLocationLink to="/">Amsterdam</StyledLocationLink>
        </StyledLocation>
      </StyledContainer>
    </StyledMain>
  );
}

export { LoginPage };

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledLogin = styled.section`
  position: relative;
  width: 520px;
  padding-top: 19.6vh;
  padding-right: 60px;
  padding-left: 13px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -2px;
    width: 12.03vh;
    min-width: 195px;
    height: 100vh;
    min-height: 450px;
    border-right: 6px solid ${Color.BLUE_20};
    background-color: ${Color.GRAY_10};
    transform: skew(-6.5deg);
  }
`;

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

const StyledLocation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 0 51px 63px 130px;
`;

const StyledLocationLink = withAttrs({ active: true }, SlantedLink);
