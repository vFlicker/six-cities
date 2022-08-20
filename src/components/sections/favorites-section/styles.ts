import styled from '@emotion/styled';

import { Container as BaseContainer } from '~/components/shared';

export const Section = styled.section`
  width: 100%;
`;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 49px;
  font-size: 32px;
  line-height: 1.1429;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 52px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const LocationWrapper = styled.div`
  width: 137px;
  margin-right: 120px;
`;
