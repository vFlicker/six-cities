import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Color } from '~/shared/theme/colors';
import { TextShadow } from '~/shared/theme/textShadow';

import { BaseButton } from './BaseButton';

const CSS = css`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: ${Color.GRAY_90};
  font-size: 14px;
  line-height: 1.2143;

  &:hover,
  &:focus,
  &:active {
    text-shadow: ${TextShadow.SHADOW_1};
  }
`;

const StyledTextButton = styled(BaseButton)`
  ${CSS}
`;

const StyledTextLink = styled(Link)`
  ${CSS}
`;

export { StyledTextButton as TextButton, StyledTextLink as TextLink };
