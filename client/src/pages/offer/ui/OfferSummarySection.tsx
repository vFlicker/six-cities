import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { IconName } from '~/shared/theme/icons';
import { Container } from '~/shared/ui/Container';
import { Icon, IconSize } from '~/shared/ui/Icon';
import { Mark, MarkSize } from '~/shared/ui/Mark';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type OfferSummarySectionProps = {
  title: string;
  rating: number;
  propertyType: string;
  guestsCount: number;
  rentalPrice: number;
  roomsCount: number;
  isFavorite: boolean;
  isPremium: boolean;
  className?: string;
};

const StyledBookmarkIcon = withAttrs(
  {
    name: IconName.Bookmark,
    size: IconSize.Large,
  },
  styled(Icon)`
    position: absolute;
    top: 15px;
    right: 0;
  `,
);

function ToggleBookmark({ isActive }: { isActive: boolean }): JSX.Element {
  return (
    <button onClick={() => console.log(isActive)}>
      <StyledBookmarkIcon />
    </button>
  );
}

function OfferSummarySection({
  className,
  propertyType,
  roomsCount,
  guestsCount,
  rentalPrice,
  rating,
  title,
  isPremium,
  isFavorite,
}: OfferSummarySectionProps): JSX.Element {
  return (
    <StyledSection className={className}>
      {isPremium && <StyledMark />}
      <HeaderWrapper>
        <StyledTitle>{title}</StyledTitle>
        <ToggleBookmark isActive={isFavorite} />
      </HeaderWrapper>
      <StyledRatingWrapper>
        <StyledRating value={rating} />
        <StyledTotalRating>{rating}</StyledTotalRating>
      </StyledRatingWrapper>
      <StyledFeatureList>
        <StyledFeatureItem>
          <StyledPlaceIcon />
          {propertyType}
        </StyledFeatureItem>
        <StyledFeatureItem>
          <StyledBedroomsIcon />
          {roomsCount} Bedrooms
        </StyledFeatureItem>
        <StyledFeatureItem>
          <StyledAdultsIcon />
          Max {guestsCount} adults
        </StyledFeatureItem>
      </StyledFeatureList>
      <StyledPrice>
        <StyledPriceValue>&euro;{rentalPrice}</StyledPriceValue>
        <StyledPriceText>&nbsp;night</StyledPriceText>
      </StyledPrice>
    </StyledSection>
  );
}

export { OfferSummarySection };

const StyledSection = withAttrs(
  { as: 'section' },
  styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
);

const StyledMark = withAttrs(
  { size: MarkSize.Large },
  styled(Mark)`
    margin-bottom: 8px;
  `,
);

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTitle = withAttrs(
  {
    as: 'h1',
    variant: TypographyVariant.TITLE_1,
  },
  styled(Typography)`
    margin: 0 0 8px 0;
    max-width: 560px;
    text-align: center;
  `,
);

const StyledRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 24px;
`;

const StyledRating = withAttrs({ size: RatingSize.LARGE }, Rating);

const StyledTotalRating = withAttrs(
  {
    as: 'span',
    variant: TypographyVariant.TITLE_3,
  },
  Typography,
);

const StyledFeatureList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 64px;
  margin-bottom: 38px;
`;

const StyledFeatureItem = withAttrs(
  {
    as: 'li',
    variant: TypographyVariant.TEXT_1,
  },
  styled(Typography)`
    display: flex;
    align-items: baseline;
    gap: 4px;
  `,
);

const StyledPlaceIcon = withAttrs({ name: IconName.Place }, Icon);
const StyledBedroomsIcon = withAttrs({ name: IconName.Bedrooms }, Icon);
const StyledAdultsIcon = withAttrs({ name: IconName.Adults }, Icon);

const StyledPrice = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: calc(100% + 12px);
    width: 345px;
    height: 1px;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.01),
      ${Color.BLUE_20}
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 18px;
    right: calc(100% + 11px);
    width: 425px;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.01),
      ${Color.BLUE_20}
    );
  }
`;

const StyledPriceValue = styled.b`
  position: relative;
  padding-right: 8px;
  padding-left: 6px;
  font-size: 32px;
  line-height: 1.1875;
  font-weight: 700;
  font-style: oblique;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    right: -2px;
    height: 52px;
    width: 2px;
    background-color: ${Color.BLUE_20};
    transform: skew(-12deg);
  }
`;

const StyledPriceText = styled.span`
  font-size: 18px;
  line-height: 1.223;
  font-weight: 700;
  font-style: oblique;
  opacity: 0.48;
`;
