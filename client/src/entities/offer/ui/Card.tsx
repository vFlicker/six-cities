import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { IconName } from '~/shared/theme/icons';
import { Icon } from '~/shared/ui/Icon';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Offer } from '../model/offer';

type CardProps = {
  offer: Offer;
  variant: CardVariant;
  className?: string;
};

const enum CardVariant {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

function Card({ offer, variant, className }: CardProps) {
  return (
    <Link to="/" className={className}>
      <StyledCard variant={variant}>
        <StyledImage src={offer.previewImage} alt={offer.title} />
        <StyledInfo>
          <StyledPriceWrapper>
            <StyledPrice>
              <StyledPriceValue>€{offer.rentalPrice}</StyledPriceValue>
              <StyledPriceText>/&nbsp;night</StyledPriceText>
            </StyledPrice>
            <StyledBookmarkIcon />
          </StyledPriceWrapper>
          <StyledRating />
          <StyledTitle>{offer.title}</StyledTitle>
          <StyledType>{offer.propertyType}</StyledType>
        </StyledInfo>
      </StyledCard>
    </Link>
  );
}

export { Card, CardVariant };

const StyledImage = styled.img`
  border-radius: 4px;
`;

const StyledInfo = styled.div`
  flex-grow: 1;
`;

const StyledPriceWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StyledPrice = styled.div`
  margin-right: 20px;
`;

const StyledPriceValue = styled.b`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  margin-right: 4px;
`;

const StyledPriceText = withAttrs(
  {
    variant: TypographyVariant.TEXT_3,
    as: 'span',
  },
  Typography,
);

const StyledBookmarkIcon = withAttrs(
  {
    name: IconName.Bookmark,
  },
  Icon,
);

const StyledRating = withAttrs(
  {
    size: RatingSize.SMALL,
    value: 5,
  },
  styled(Rating)`
    margin-bottom: 6px;
  `,
);

const StyledTitle = withAttrs(
  {
    variant: TypographyVariant.TITLE_4,
  },
  styled(Typography)`
    margin-bottom: 4px;
  `,
);

const StyledType = withAttrs(
  {
    variant: TypographyVariant.TEXT_3,
    as: 'p',
  },
  Typography,
);

const CartVariantToCSS = {
  [CardVariant.VERTICAL]: css`
    flex-direction: column;
    width: 260px;

    ${StyledImage} {
      width: 100%;
      height: 200px;
      margin-bottom: 9px;
    }
  `,
  [CardVariant.HORIZONTAL]: css`
    flex-direction: row;
    width: 420px;

    ${StyledImage} {
      width: 150px;
      height: 110px;
      margin-right: 16px;
    }
  `,
};

const StyledCard = styled.article<{ variant: CardVariant }>`
  ${({ variant }) => CartVariantToCSS[variant]}

  position: relative;
  display: flex;

  &:hover {
    opacity: 0.6;
  }
`;
