import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { AppRoute } from '~/shared/router';
import { IconName } from '~/shared/theme/icons';
import { Icon } from '~/shared/ui/Icon';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Offer } from '../types';

type CardProps = Offer & {
  variant: CardVariant;
  className?: string;
  onMouseEnter?: (offerId: string) => void;
  onMouseLeave?: () => void;
};

const enum CardVariant {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

function Card({
  id,
  previewImage,
  title,
  rentalPrice,
  propertyType,
  variant,
  className,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  const handleMouseEnter = (): void => {
    if (onMouseEnter) onMouseEnter(id);
  };

  const handleMouseLeave = (): void => {
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <Link to={`${AppRoute.Offers}/${id}`} className={className}>
      <StyledCard
        variant={variant}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <StyledImage src={previewImage} alt={title} />
        <StyledInfo>
          <StyledPriceWrapper>
            <StyledPrice>
              <StyledPriceValue>€{rentalPrice}</StyledPriceValue>
              <StyledPriceText>/&nbsp;night</StyledPriceText>
            </StyledPrice>
            <StyledBookmarkIcon />
          </StyledPriceWrapper>
          <StyledRating />
          <StyledTitle>{title}</StyledTitle>
          <StyledType>{propertyType}</StyledType>
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
