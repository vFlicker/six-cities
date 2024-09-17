import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import backgroundImage from '~/images/amsterdam.jpg';
import { Header } from '~/sections/Header';
import { Color } from '~/tokens/colors';

const StyledLoginLayout = styled.div`
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
    url(${backgroundImage});
  background-position:
    top left,
    right top;
  background-size:
    auto,
    auto 100%;
  background-repeat: no-repeat, no-repeat;
  overflow: hidden;
`;

function LoginLayout(): JSX.Element {
  return (
    <StyledLoginLayout>
      <Header hasMenu={false} />
      <Outlet />
    </StyledLoginLayout>
  );
}

export { LoginLayout };
