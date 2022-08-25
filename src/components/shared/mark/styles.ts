import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Mark = {
  type: 'big' | 'small';
};

export const Mark = styled.div<Mark>`
  background-color: #4481c3;
  transform: skew(-10deg);
  color: #fff;
  font-weight: 700;
  font-style: oblique;

  ${({ type }) => {
    switch (type) {
      case 'big':
        return css`
          padding: 7px 11px 3px 8px;
          border-radius: 2px;
          line-height: 1.1875;
          font-size: 16px;
        `;
      case 'small':
        return css`
          padding: 5px 15px 5px 9px;
          border-radius: 3px;
          line-height: 1.1667;
          font-size: 12px;
        `;
    }
  }}

  span {
    display: block;
    transform: skew(10deg);
  }
`;
