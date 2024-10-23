import styled from '@emotion/styled';

import { Card, CardVariant, Offer } from '~/entities/offer';
import { CardList } from '~/shared/ui/CardList';
import { Filter } from '~/shared/ui/Filter';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type OffersProps = {
  offers: Offer[];
  className?: string;
  onCardMouseEnter?: (offerId: string) => void;
  onCardMouseLeave?: () => void;
};

function Offers({
  offers,
  className,
  onCardMouseEnter,
  onCardMouseLeave,
}: OffersProps): JSX.Element {
  return (
    <section className={className}>
      <StyledTitle>312 places to stay in Amsterdam</StyledTitle>

      <StyledFilter label="Sort by:">
        <option>Popular</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        <option>Top rated first</option>
      </StyledFilter>

      <CardList col={2}>
        {offers.map((offer) => (
          <Card
            key={offer.id}
            {...offer}
            variant={CardVariant.VERTICAL}
            onMouseEnter={onCardMouseEnter}
            onMouseLeave={onCardMouseLeave}
          />
        ))}
      </CardList>
    </section>
  );
}

export { Offers };

const StyledTitle = withAttrs(
  {
    as: 'h2',
    variant: TypographyVariant.TITLE_3,
  },
  styled(Typography)`
    margin-bottom: 24px;
  `,
);

const StyledFilter = styled(Filter)`
  margin-bottom: 24px;
`;
