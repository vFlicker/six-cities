import styled from '@emotion/styled';

import { CardList } from '~/shared/ui/CardList';
import { Loader } from '~/shared/ui/Loader';
import { Section } from '~/shared/ui/Section';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { useNearbyOffers } from '../api/useNearbyOffers';
import { Card, CardVariant } from './Card';

type NearbyOffersSectionProps = {
  className?: string;
};

function NearbyOffersSection({
  className,
}: NearbyOffersSectionProps): JSX.Element {
  const { nearbyOffers, isNearbyOffersPending } = useNearbyOffers();

  if (isNearbyOffersPending) return <Loader />;
  const hasOffers = nearbyOffers && nearbyOffers.length > 0;

  return (
    <Section className={className} title="Other places in the neighbourhood">
      {!hasOffers && <StyledText>No nearby offers found</StyledText>}
      {hasOffers && (
        <CardList col={3}>
          {nearbyOffers.map((offer) => (
            <Card key={offer.id} variant={CardVariant.VERTICAL} {...offer} />
          ))}
        </CardList>
      )}
    </Section>
  );
}

export { NearbyOffersSection };

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_1,
  },
  styled(Typography)`
    text-align: center;
  `,
);
