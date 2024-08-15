import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { BaseButton } from '~/helpers/BaseButton';
import { Color } from '~/tokens/colors';
import { Radius } from '~/tokens/radiuses';
import { TextShadow } from '~/tokens/textShadow';

type CustomProps = {
  active?: boolean;
};

type ButtonProps = CustomProps & ComponentProps<typeof StyledButton>;
type LinkProps = CustomProps & ComponentProps<typeof StyledLink>;

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

const StyledButton = styled(BaseButton)<CustomProps>`
  ${({ active }) => active && ActiveCSS}

  ${CSS}
`;

const StyledLink = styled(RouterLink)<CustomProps>`
  ${({ active }) => active && ActiveCSS}

  ${CSS}
`;

function SlantedButton({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}

function SlantedLink({ children, ...props }: LinkProps): JSX.Element {
  return (
    <StyledLink {...props}>
      <span>{children}</span>
    </StyledLink>
  );
}

export { SlantedButton, SlantedLink };
