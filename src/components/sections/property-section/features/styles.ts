import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { adultsIconSrc, bedroomsIconSrc, placeIconSrc } from '~/assets/images';

type Feature = {
  type: 'entire' | 'bedrooms' | 'adults';
};

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 38px;
  margin-left: -64px;
`;

export const Item = styled.li<Feature>`
  margin-left: 64px;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.3;
  background-repeat: no-repeat;

  ${({ type }) => {
    switch (type) {
      case 'entire':
        return css`
          background-image: url(${placeIconSrc});
          background-size: 13px 16px;
        `;
      case 'bedrooms':
        return css`
          background-image: url(${bedroomsIconSrc});
          background-size: 14px 18px;
        `;
      case 'adults':
        return css`
          background-image: url(${adultsIconSrc});
          background-size: 13px 12px;
          background-position: left 3px;
        `;
    }
  }};
`;
