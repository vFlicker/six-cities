import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { withAttrs } from '~/helpers/withAttrs';

import logoImage from '../images/logo.svg';

type LogoProps = {
  className?: string;
  width?: string;
  height?: string;
};

function Logo({ className, width, height }: LogoProps): JSX.Element {
  return (
    <StyledLogo className={className} to="/">
      <StyledImage
        src={logoImage}
        width={width}
        height={height}
        alt="6 cities logo"
      />
    </StyledLogo>
  );
}

export { Logo };

const StyledLogo = styled(Link)`
  display: inline-grid;
  width: 128px;
  height: 22px;
`;

const StyledImage = withAttrs(
  ({ width, height }) => ({
    width: width || '81',
    height: height || '41',
  }),
  styled.img``,
);
