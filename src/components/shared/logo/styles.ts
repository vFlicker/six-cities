import styled from '@emotion/styled';

export const Logo = styled.img`
  &:not(.header__logo-link--active):focus,
  &:not(.header__logo-link--active):hover {
    opacity: .5;
  }
`;
