import { Link as RouterDomLink } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Link = styled(RouterDomLink)<{ isActive: boolean }>`
  ${({ isActive }) => css`
    background-color: ${isActive ? '#4481c3' : ''};
    text-shadow: ${isActive ? '1px 0 0, .5px 0 0, -1px 0 0' : ''};
    color: ${isActive ? '#fff' : ''};
  `};

  display: block;
  padding: 8px 20px 6px 16px;
  border-radius: 3px;

  line-height: 1.211;
  font-size: 19px;
  font-weight: 300;
  font-style: oblique;

  transform: skew(-15deg);
  transition: background-color 0.3s, color 0.3s, text-shadow 0.3s;

  &:focus,
  &:hover {
    text-shadow: 1px 0 0, 0.5px 0 0, -1px 0 0;
  }
`;

export const Text = styled.span`
  display: block;
  transform: skew(15deg);
`;
