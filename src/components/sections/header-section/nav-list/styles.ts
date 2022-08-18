import styled from '@emotion/styled';

import { avatarIconSrc } from '@/assets/images';

export const Nav = styled.nav`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 11px;
  margin-left: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 11px;
  margin-left: 30px;
`;

export const Item = styled.li`
  margin-bottom: 15px;

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Avatar = styled.div<{ avatarUrl?: string }>`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;

  background-image: ${({ avatarUrl }) =>
    avatarUrl ? `url(${avatarUrl})` : `url(${avatarIconSrc})`};
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Button = styled.span`
  padding-top: 2px;
  padding-right: 8px;
`;
