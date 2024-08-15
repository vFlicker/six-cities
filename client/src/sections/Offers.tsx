import { Card, CardVariant } from '~/components/Card';
import { Filter } from '~/elements/Filter';
import { CardList } from '~/helpers/CardList';
import { Section } from '~/helpers/Section';

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
    <Section className={className} title="312 places to stay in Amsterdam">
      <Filter label="Sort by:">
        <option>Popular</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        <option>Top rated first</option>
      </Filter>

      <CardList col={2}>
        {cards.map((card, index) => (
          <Card key={index} variant={CardVariant.VERTICAL} {...card} />
        ))}
      </CardList>
    </Section>
  );
}

export { Offers };
