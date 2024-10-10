import styled from '@emotion/styled';

import { Icon, IconSize } from '~/shared/ui/Icon';
import { Mark, MarkSize } from '~/shared/ui/Mark';
import { Rating, RatingSize } from '~/shared/ui/Rating';
import { Typography, TypographyVariant } from '~/shared/ui/Typography';
import { Container } from '~/helpers/Container';
import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/shared/tokens/colors';
import { IconName } from '~/shared/tokens/icons';

type OfferSummaryProps = {
  className?: string;
};

function OfferSummary({ className }: OfferSummaryProps): JSX.Element {
  return (
    <StyledSection className={className}>
      <StyledMark />
      <HeaderWrapper>
        <StyledTitle>
          Beautiful &amp; luxurious studio at great location
        </StyledTitle>
        <StyledBookmarkIcon />
      </HeaderWrapper>
      <StyledRatingWrapper>
        <StyledRating value={4} />
        <StyledTotalRating>4.8</StyledTotalRating>
      </StyledRatingWrapper>
      <StyledFeatureList>
        <StyledFeatureItem>
          <StyledPlaceIcon />
          Apartment
        </StyledFeatureItem>
        <StyledFeatureItem>
          <StyledBedroomsIcon />3 Bedrooms
        </StyledFeatureItem>
        <StyledFeatureItem>
          <StyledAdultsIcon />
          Max 4 adults
        </StyledFeatureItem>
      </StyledFeatureList>
      <StyledPrice>
        <StyledPriceValue>&euro;120</StyledPriceValue>
        <StyledPriceText>&nbsp;night</StyledPriceText>
      </StyledPrice>
    </StyledSection>
  );
}

export { OfferSummary };

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
