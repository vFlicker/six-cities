import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { Login } from '~/features/auth';
import { backgroundAmsterdamImage } from '~/shared/assets/images';
import { Color } from '~/shared/theme/colors';
import { ContainerMixin } from '~/shared/ui/Container';
import { SlantedLink } from '~/shared/ui/SlantedButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Header } from '~/widgets/header';

function LoginPage(): JSX.Element {
  return (
    <StyledWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <StyledContainer>
        <Header hasMenu={false} />
        <StyledMain>
          <StyledLogin />
          <StyledLocation>
            <StyledLocationLink to="/">Amsterdam</StyledLocationLink>
          </StyledLocation>
        </StyledMain>
      </StyledContainer>
    </StyledWrapper>
  );
}

export { LoginPage };

const StyledWrapper = styled.div`
  background-color: ${Color.GRAY_10};
`;

const StyledMain = styled.main`
  ${ContainerMixin}
  display: flex;
  flex-grow: 1;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1144px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(
      to right,
      ${Color.GRAY_10} 509px,
      transparent 509px
    ),
    url(${backgroundAmsterdamImage});
  background-position:
    top left,
    right top;
  background-size:
    auto,
    auto 100%;
  background-repeat: no-repeat, no-repeat;
  overflow: hidden;
`;

const StyledLogin = styled(Login)`
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

const StyledLocation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 0 51px 63px 130px;
`;

const StyledLocationLink = withAttrs({ active: true }, SlantedLink);
