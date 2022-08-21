import styled from '@emotion/styled';

import {
  Page as PageBase,
  PageContent as BasePageContent,
  visuallyHidden,
} from '~/components/shared';

export const Page = styled(PageBase)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: #f5f5f5;
`;

export const PageContent = styled(BasePageContent)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: hidden;
`;

export const Title = styled.h1`
  ${visuallyHidden}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: #fff;
  overflow-y: hidden;
`;
