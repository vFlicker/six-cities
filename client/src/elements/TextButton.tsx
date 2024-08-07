import styled from '@emotion/styled';

import { BaseButton } from '../helpers/BaseButton';
import { Color } from '../tokens/colors';

const StyledTextButton = styled(BaseButton)`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: ${Color.GRAY_90};
  font-size: 14px;
  line-height: 1.2143;

  &:hover,
  &:focus,
  &:active {
    text-shadow:
      0.1px 0 0,
      -0.1px 0 0;
  }
`;

export { StyledTextButton as TextButton };
