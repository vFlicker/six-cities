import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { BaseButton } from '~/helpers/BaseButton';
import { Color } from '~/tokens/colors';
import { Radius } from '~/tokens/radiuses';
import { TextShadow } from '~/tokens/textShadow';

type CustomProps = {
  active?: boolean;
};

type StyledButtonProps = CustomProps & ComponentProps<typeof BaseButton>;
type StyledLinkProps = CustomProps & LinkProps;

const CSS = css`
  padding: 9px 20px 6px 14px;
  border-radius: ${Radius.RADIUS_3};
  font-size: 19px;
  line-height: 1.211;
  font-weight: 300;
  font-style: oblique;
  transform: skew(-15deg);

  span {
    display: block;
    transform: skew(15deg);
  }

  &:hover,
  &:focus {
    text-shadow: ${TextShadow.SHADOW_1};
  }
`;

const ActiveCSS = css`
  text-shadow: ${TextShadow.SHADOW_1};
  color: ${Color.WHITE};
  background-color: ${Color.BLUE_20};
`;

const StyledButton = styled(
  ({ active: _, children, ...props }: StyledButtonProps) => (
    <BaseButton {...props}>
      <span>{children}</span>
    </BaseButton>
  ),
)`
  ${({ active: active }) => active && ActiveCSS}

  ${CSS}
`;

const StyledLink = styled(
  ({ active: _, children, ...props }: StyledLinkProps) => (
    <RouterLink {...props}>
      <span>{children}</span>
    </RouterLink>
  ),
)`
  ${({ active: active }) => active && ActiveCSS}

  ${CSS}
`;

export { StyledButton as SlantedButton, StyledLink as SlantedLink };
