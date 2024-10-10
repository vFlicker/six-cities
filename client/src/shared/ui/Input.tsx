import styled from '@emotion/styled';

import { Color } from '~/shared/tokens/colors';
import { Radius } from '~/shared/tokens/radiuses';

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 14px 13px;
  font-size: 16px;
  line-height: 1.1875;
  color: ${Color.GRAY_90};
  background-color: ${Color.WHITE};
  border: 1px solid ${Color.GRAY_30};
  border-radius: ${Radius.RADIUS_2};

  &:hover,
  &:focus {
    border-color: ${Color.GRAY_40};
  }

  &::placeholder {
    color: ${Color.GRAY_50};
  }
`;

export { StyledInput as Input };
