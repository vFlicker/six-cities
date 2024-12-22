import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import { AppRoute } from '~/shared/libs/router';
import { Color } from '~/shared/theme/colors';
import { DefaultLayout } from '~/shared/ui/DefaultLayout';
import { TextLink } from '~/shared/ui/TextButton';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Header } from '~/widgets/header';

// TODO: add image to page not found and change styles
function NotFoundPage(): JSX.Element {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>404 Not Found</StyledTitle>
        <TextLink to={AppRoute.Root}>Go to the home page</TextLink>
      </StyledMain>
    </DefaultLayout>
  );
}

export { NotFoundPage };

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
  flex-grow: 1;
  padding: 30vh;
`;
const StyledHeader = styled(Header)`
  background-color: ${Color.GRAY_10};
`;

const StyledTitle = withAttrs(
  {
    variant: TypographyVariant.TITLE_1,
  },
  styled(Typography)`
    margin-bottom: 10px;
  `,
);
