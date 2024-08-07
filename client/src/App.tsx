import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from './elements/Button';
import { Icon, IconSize } from './elements/Icon';
import { TextButton } from './elements/TextButton';
import { Typography, TypographyVariant } from './elements/Typography';
import { withAttrs } from './helpers/withAttrs';
import { Color, globalColors } from './tokens/colors';
import { globalFonts } from './tokens/fonts';
import { IconName, SpriteWithIcons } from './tokens/icons';
import { globalNormalize } from './tokens/normalize';
import { globalRadiuses } from './tokens/radiuses';
import { globalResets } from './tokens/resets';

const StyledTitle = withAttrs(
  styled(Typography)`
    margin-bottom: 8px;
  `,
  {
    as: 'h2',
    variant: TypographyVariant.TITLE_2,
  },
);

const StyledText = withAttrs(Typography, {
  as: 'p',
  variant: TypographyVariant.TEXT_1,
  color: Color.ORANGE_10,
});

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledStarIcon = withAttrs(Icon, {
  name: IconName.STAR,
  size: IconSize.LARGE,
});

const StyledBookmarkIcon = withAttrs(Icon, {
  name: IconName.BOOKMARK,
  size: IconSize.LARGE,
});

function App(): JSX.Element {
  return (
    <>
      <Global styles={globalNormalize} />
      <Global styles={globalResets} />
      <Global styles={globalFonts} />
      <Global styles={globalRadiuses} />
      <Global styles={globalColors} />

      <StyledTitle>Styled title</StyledTitle>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </StyledText>

      <StyledButton>Click me</StyledButton>

      <div>
        <Icon name={IconName.ARROW_SELECT} />
        <Icon name={IconName.BOOKMARK} />
        <Icon name={IconName.STAR} size={IconSize.MEDIUM} />
        <StyledStarIcon />
        <StyledBookmarkIcon />
      </div>

      <TextButton>
        <Icon name={IconName.USER} size={IconSize.MEDIUM} />
        Oliver.conner@gmail.com
      </TextButton>

      <SpriteWithIcons />
    </>
  );
}

export { App };
