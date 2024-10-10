import { Card, CardVariant } from '~/entities/offer';
import { CardList } from '~/helpers/CardList';
import { Section } from '~/helpers/Section';

type OtherOffersProps = {
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
];

function OtherOffers({ className }: OtherOffersProps): JSX.Element {
  return (
    <Section className={className} title="Other places in the neighbourhood">
      <CardList col={3}>
        {cards.map((card, index) => (
          <Card key={index} variant={CardVariant.VERTICAL} {...card} />
        ))}
      </CardList>
    </Section>
  );
}

export { OtherOffers };
