import styled from '@emotion/styled';

import { Card, CardVariant, Offer } from '~/entities/offer';
import { CardList } from '~/shared/ui/CardList';
import { SlantedLink } from '~/shared/ui/SlantedButton';
import { withAttrs } from '~/shared/ui/withAttrs';

type FavoriteItemProps = {
  title: string;
  offers: Offer[];
  className?: string;
};

function FavoriteCategory({
  className,
  title,
  offers,
}: FavoriteItemProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <StyledLocationLink to="/">{title}</StyledLocationLink>
      <CardList col={1}>
        {offers.map((offer) => (
          <Card key={offer.id} variant={CardVariant.HORIZONTAL} offer={offer} />
        ))}
      </CardList>
    </StyledWrapper>
  );
}

export { FavoriteCategory };

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 120px;
`;

const StyledLocationLink = withAttrs(
  { active: true },
  styled(SlantedLink)`
    min-width: 140px;
    text-align: center;
  `,
);
