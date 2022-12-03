import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Card = {
  cardType: 'big' | 'small';
};

export const Card = styled.article<Card>`
  position: relative;

  &:hover {
    opacity: 0.6;
  }

  ${({ cardType }) => {
    switch (cardType) {
      case 'big':
        return css`
          width: 260px;
          margin-left: 8px;
          margin-bottom: 24px;
        `;
      case 'small':
        return css`
          display: flex;
          align-items: flex-start;
          width: 421px;
          margin-bottom: 32px;

          &:last-child {
            margin-bottom: 0;
          }
        `;
    }
  }}
`;

export const CardInfo = styled.div`
  flex-grow: 1;
`;

export const MarkWrapper = styled.div`
  position: absolute;
  top: -5px;
  left: -3px;
`;

export const ImageWrapper = styled.div<Card>`
  min-height: 20px;
  margin-bottom: 9px;

  ${({ cardType }) => {
    if (cardType === 'small') {
      return css`
        min-width: 150px;
        margin-right: 16px;
        margin-bottom: 0;
      `;
    }

    return css``;
  }}
`;

export const Image = styled.img<Card>`
  display: block;
  border-radius: 4px;

  ${({ cardType }) => {
    switch (cardType) {
      case 'big':
        return css`
          width: 260px;
          height: 200px;
        `;
      case 'small':
        return css`
          width: 150px;
          height: 110px;
        `;
    }
  }}
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  margin-right: 20px;
`;

export const Value = styled.b`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
`;

export const Text = styled.span`
  font-size: 12px;
  line-height: 1.1667;
`;

export const StarRatingWrapper = styled.div`
  margin-bottom: 6px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 1.223;
  font-weight: 700;
  font-style: oblique;

  & a:focus,
  & a:hover {
    opacity: 0.7;
  }
`;

export const Type = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 1.1667;
`;
