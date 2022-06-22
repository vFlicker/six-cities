import styled from '@emotion/styled';

import { logoIconSrc } from '@/assets/images';

export function Logo(): JSX.Element {
  return (
    <LogoStyles src={logoIconSrc} width="81" height="41" alt="6 cities logo" />
  );
}

const LogoStyles = styled.img`
  &:not(.header__logo-link--active):focus,
  &:not(.header__logo-link--active):hover {
    opacity: .5;
  }
`;
