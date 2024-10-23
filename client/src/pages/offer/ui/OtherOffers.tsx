import { Card, CardVariant } from '~/entities/offer';
import { offers } from '~/mocks/offers';
import { CardList } from '~/shared/ui/CardList';

import { Section } from './Section';

type OtherOffersProps = {
  className?: string;
};

function OtherOffers({ className }: OtherOffersProps): JSX.Element {
  return (
    <Section className={className} title="Other places in the neighbourhood">
      <CardList col={3}>
        {offers.map((offer) => (
          <Card key={offer.id} variant={CardVariant.VERTICAL} {...offer} />
        ))}
      </CardList>
    </Section>
  );
}

export { OtherOffers };
