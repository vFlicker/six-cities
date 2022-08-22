import styled from '@emotion/styled';
import { visuallyHidden } from '~/components/shared';

type ButtonProps = {
  isFavorite?: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: absolute;
  top: 41px;
  right: 93px;
  width: 31px;
  height: 33px;
  margin-top: 2px;

  &:focus svg,
  &:hover svg {
    stroke: #4481c3;
  }

  .property__bookmark-button--active svg {
    stroke: #4481c3;
    fill: #4481c3;
  }
`;

export const Svg = styled.svg`
  fill: none;
  stroke: #b8b8b8;
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s;
`;

export const HiddenText = styled.span`
  ${visuallyHidden};
`;
