import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

import { avatarIconSrc } from '~/assets/images';

type AvatarProps = {
  avatarUrl?: string;
};

export const Header = styled.header``;

export const HeaderLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin-right: auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 16px 19px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const Item = styled.li``;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.2143;
  transition: text-shadow 0.3s;

  &:focus,
  &:hover {
    text-shadow: 0.5px 0 0, -0.5px 0 0;
  }
`;

export const Avatar = styled.div<AvatarProps>`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  border-radius: 50%;

  background-image: ${({ avatarUrl }) =>
    avatarUrl ? `url(${avatarUrl})` : `url(${avatarIconSrc})`};
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Counter = styled.div`
  display: inline-block;
  min-width: 40px;
  height: 25px;
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  color: #fff;
  background: #4481c3;
  border-radius: 15px;
`;

export const LinkText = styled.span`
  padding-top: 2px;
  padding-right: 8px;
`;
