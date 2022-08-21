import styled from '@emotion/styled';
import { css } from '@emotion/react';

type StyledProps = {
  orientation: 'horizontal' | 'vertical';
};

export const Map = styled.section<StyledProps>`
  width: 100%;

  ${({ orientation }) => {
    if (orientation === 'vertical') {
      return css`
        height: 579px;
        margin-bottom: 50px;
      `;
    }
  }};
`;

export default StyledProps;
