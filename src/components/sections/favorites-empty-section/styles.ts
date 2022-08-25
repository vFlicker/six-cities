import styled from '@emotion/styled';

import { visuallyHidden, Container as BaseContainer } from '../../shared';

export const Title = styled.h1`
  ${visuallyHidden};
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
`;
