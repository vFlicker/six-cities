import styled from '@emotion/styled';

export const MarkWrapper = styled.div`
  position: absolute;
  top: -5px;
  left: -3px;
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
