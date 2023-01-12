import styled from '@emotion/styled';

import { Page as BasePage } from '../../shared/page';
import { PageContent as BasePageContent } from '../../shared/page-content';
import { visuallyHidden } from '../../styles/visually-hidden';

export const Page = styled(BasePage)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: #f5f5f5;
`;

export const PageContent = styled(BasePageContent)`
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
