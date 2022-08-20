import styled from '@emotion/styled';

import {
  Container as BaseContainer,
  visuallyHidden,
} from '~/components/shared';

export const Title = styled.h1`
  ${visuallyHidden};
`;

export const Container = styled(BaseContainer)`
  display: flex;
  justify-content: center;
`;
