import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import { Button, Link } from './elements/Button';
import { Filter } from './elements/Filter';
import { Icon, IconSize } from './elements/Icon';
import { Input } from './elements/Input';
import { Rating } from './elements/Rating';
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

      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>

      <SpriteWithIcons />
    </>
  );
}

function IndexPage(): JSX.Element {
  return (
    <>
      <StyledTitle>Styled title</StyledTitle>

      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </StyledText>

      <StyledButton>Click me</StyledButton>

      <div>
        <Icon name={IconName.ARROW} />
        <Icon name={IconName.BOOKMARK} />
        <Icon name={IconName.STAR} size={IconSize.MEDIUM} />
        <StyledStarIcon />
        <StyledBookmarkIcon />
      </div>

      <TextButton>
        <Icon name={IconName.USER} size={IconSize.MEDIUM} />
        Oliver.conner@gmail.com
      </TextButton>

      <div>
        <Input placeholder="Type something" />
        <Input
          as="textarea"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
      </div>
      <Rating />

      <Filter label="Sort by:">
        <option>Popular</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        <option>Top rated first</option>
      </Filter>

      <Link to="/">Go to home</Link>
    </>
  );
}

export { App };
