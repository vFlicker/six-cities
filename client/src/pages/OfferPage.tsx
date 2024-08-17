import { FormRating } from '~/elements/FormRating';
import { Icon, IconSize } from '~/elements/Icon';
import { Input } from '~/elements/Input';
import { Rating, RatingSize } from '~/elements/Rating';
import { Typography, TypographyVariant } from '~/elements/Typography';
import { withAttrs } from '~/helpers/withAttrs';
import { Color } from '~/tokens/colors';
import { IconName } from '~/tokens/icons';

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_1,
    color: Color.ORANGE_10,
  },
  Typography,
);

const StyledStarIcon = withAttrs(
  {
    name: IconName.STAR,
    size: IconSize.LARGE,
  },
  Icon,
);

function OfferPage(): JSX.Element {
  return (
    <main>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </StyledText>

      <div>
        <Icon name={IconName.ARROW} />
        <Icon name={IconName.BOOKMARK} />
        <Icon name={IconName.STAR} size={IconSize.MEDIUM} />
        <StyledStarIcon />
      </div>

      <div>
        <Input placeholder="Type something" />
        <Input
          as="textarea"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
      </div>

      <FormRating />

      <Rating size={RatingSize.LARGE} rating={4} />
    </main>
  );
}

export { OfferPage };
