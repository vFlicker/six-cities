import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContainerMixin = css`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;
`;

const SmallContainerMixin = css`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;
`;

const StyledContainer = styled.div`
  ${ContainerMixin}
`;

const StyledSmallContainer = styled.div`
  ${ContainerMixin}
`;

export {
  StyledContainer as Container,
  ContainerMixin,
  StyledSmallContainer as SmallContainer,
  SmallContainerMixin,
};
