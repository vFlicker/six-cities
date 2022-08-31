import styled from '@emotion/styled';

import { visuallyHidden } from '../styles';

type ButtonProps = {
  isFavorite?: boolean;
};

export const Button = styled.button<ButtonProps>`
  margin-top: 2px;

  &:focus svg,
  &:hover svg {
    stroke: #4481c3;
  }

  svg {
    stroke: ${({ isFavorite }) => (isFavorite ? '#4481c3' : '#979797')};
    fill: ${({ isFavorite }) => (isFavorite ? '#4481c3' : '')};
  }
`;

export const Svg = styled.svg`
  fill: none;
  stroke: #979797;
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s;
`;

export const HiddenText = styled.span`
  ${visuallyHidden};
`;
