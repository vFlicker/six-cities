import styled from '@emotion/styled';

import { Container } from '~/shared/ui/Container';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';

import { FavoriteCategory } from './FavoriteCategory';
import { FavoriteList } from './FavoriteList';

type FavoriteProps = {
  className?: string;
};

const favorites = [
  {
    title: 'Paris',
    offers: [{ title: 'Paris' }, { title: 'Paris' }],
  },
  {
    title: 'Cologne',
    offers: [{ title: 'Cologne' }],
  },
];

function Favorites({ className }: FavoriteProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledSection className={className}>
        <StyledTitle>Saved listing</StyledTitle>

        <FavoriteList>
          {favorites.map((favorite, index) => (
            <FavoriteCategory key={index} {...favorite} />
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
