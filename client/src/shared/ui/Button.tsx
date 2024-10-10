import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { BaseButton } from '~/helpers/BaseButton';
import { Color } from '~/shared/tokens/colors';
import { Radius } from '~/shared/tokens/radiuses';

const CSS = css`
  padding: 16px 20px 13px;
  border-radius: ${Radius.RADIUS_3};
  color: ${Color.WHITE};
  background-color: ${Color.BLUE_20};

  &:focus,
  &:hover {
    background-color: ${Color.BLUE_30};
  }

  &:disabled {
    background-color: ${Color.GRAY_40};
  }
`;

const StyledButton = styled(BaseButton)`
  ${CSS}
`;

const StyledLink = styled(Link)`
  ${CSS};
`;

export { StyledButton as Button, StyledLink as Link };
