import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Icon } from '~/elements/Icon';
import { Rating, RatingSize } from '~/elements/Rating';
import { Typography, TypographyVariant } from '~/elements/Typography';
import { withAttrs } from '~/helpers/withAttrs';
import apartmentImage1 from '~/images/gallery/1.jpg';
import { IconName } from '~/tokens/icons';

type CardProps = {
  variant: CardVariant;
  className?: string;
};

const enum CardVariant {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

function Card({ className, variant }: CardProps) {
  return (
    <StyledWrapper to="/" className={className}>
      <StyledCard variant={variant}>
        <StyledImage src={apartmentImage1} alt="Card place" />
        <StyledInfo>
          <StyledPriceWrapper>
            <StyledPrice>
              <StyledPriceValue>€80</StyledPriceValue>
              <StyledPriceText>/&nbsp;night</StyledPriceText>
            </StyledPrice>
            <StyledBookmarkIcon />
          </StyledPriceWrapper>
          <StyledRating />
          <StyledTitle>Wood and stone place</StyledTitle>
          <StyledType>Room</StyledType>
        </StyledInfo>
      </StyledCard>
    </StyledWrapper>
  );
}

export { Card, CardVariant };

const StyledWrapper = styled(Link)``;

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
    rating: 5,
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
