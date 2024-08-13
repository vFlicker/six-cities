import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContainerMixin = css`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;
`;

const StyledContainer = styled.div`
  ${ContainerMixin}
`;

export { StyledContainer as Container, ContainerMixin };
