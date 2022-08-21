import styled from '@emotion/styled';

import { Container, visuallyHidden } from '../../shared';

export const MainContainer = styled(Container)`
  display: flex;
  padding-right: 0;
`;

export const Title = styled.h2`
  ${visuallyHidden}
`;

export const PlacesFound = styled.b`
  display: block;
  margin-bottom: 22px;
  padding-left: 2px;
  font-size: 24px;
  line-height: 1.167;
  font-weight: 700;
  font-style: oblique;
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;
