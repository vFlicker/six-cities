import styled from '@emotion/styled';

import { Card, CardVariant } from '~/entities/offer';
import { CardList } from '~/shared/ui/CardList';
import { Filter } from '~/shared/ui/Filter';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type OffersProps = {
  className?: string;
};

const cards = [
  {
    title: 'Paris',
  },
  {
    title: 'Cologne',
  },
  {
    title: 'Cologne',
  },
  {
    title: 'Cologne',
  },
];

function Offers({ className }: OffersProps): JSX.Element {
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
        {cards.map((card, index) => (
          <Card key={index} variant={CardVariant.VERTICAL} {...card} />
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
