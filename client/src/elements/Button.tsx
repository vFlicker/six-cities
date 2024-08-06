import styled from '@emotion/styled';

import { BaseButton } from '~/helpers/BaseButton';
import { Color } from '~/tokens/colors';
import { Radius } from '~/tokens/radiuses';

const Button = styled(BaseButton)`
  padding: 16px 20px 13px;
  border-radius: ${Radius.RADIUS_3};
  color: ${Color.WHITE};
  background-color: ${Color.BLUE_20};

  &:focus,
  &:hover {
    background-color: ${Color.BLUE_40}
  }

  &:disabled {
    background-color: ${Color.GRAY_20}
  }
`;

export { Button };
