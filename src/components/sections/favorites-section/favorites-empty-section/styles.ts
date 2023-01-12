import styled from '@emotion/styled';

import { Container as BaseContainer } from '../../../shared/container';
import { visuallyHidden } from '../../../styles/visually-hidden';

export const Title = styled.h1`
  ${visuallyHidden};
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
`;
