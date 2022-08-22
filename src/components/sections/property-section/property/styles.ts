import styled from '@emotion/styled';

import { Container as BaseContainer } from '../../../shared';

export const Container = styled(BaseContainer)`
  position: relative;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 613px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 7px;
  padding: 0 28px;
  font-size: 38px;
  line-height: 1.21053;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
`;

export const StarRatingWrapper = styled.div`
  margin-bottom: 24px;
`;
