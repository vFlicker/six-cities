import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import logoImage from '../images/logo.svg';

type LogoProps = {
  className?: string;
};

const StyledLogo = styled(Link)`
  display: inline-grid;
  width: 128px;
  height: 22px;
`;

function Logo({ className }: LogoProps): JSX.Element {
  return (
    <StyledLogo className={className} to="/">
      <img src={logoImage} width="81" height="41" alt="Logotype 6 Cities" />
    </StyledLogo>
  );
}

export { Logo };
