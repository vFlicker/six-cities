import styled from '@emotion/styled';

import { favoriteCategory } from '~/entities/offer';
import { Container } from '~/shared/ui/Container';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { FavoriteCategory } from './FavoriteCategory';
import { FavoriteList } from './FavoriteList';

type FavoriteProps = {
  className?: string;
};

function Favorites({ className }: FavoriteProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledSection className={className}>
        <StyledTitle>Saved listing</StyledTitle>

        <FavoriteList>
          {favoriteCategory.map(({ offers, title }, index) => (
            <FavoriteCategory key={index} title={title} offers={offers} />
          ))}
        </FavoriteList>
      </StyledSection>{' '}
    </StyledContainer>
  );
}

export { Favorites };

const StyledSection = styled.section`
  width: 100%;
`;

const StyledContainer = styled(Container)`
  display: flex;
`;

const StyledTitle = withAttrs(
  {
    as: 'h1',
    variant: TypographyVariant.TITLE_2,
  },
  styled(Typography)`
    margin-bottom: 50px;
    text-align: center;
  `,
);
