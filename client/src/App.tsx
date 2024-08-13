import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';

import { Card, CardVariant } from './components/Card';
import { Button } from './elements/Button';
import { Filter } from './elements/Filter';
import { FormRating } from './elements/FormRating';
import { Icon, IconSize } from './elements/Icon';
import { Input } from './elements/Input';
import { Rating, RatingSize } from './elements/Rating';
import { Typography, TypographyVariant } from './elements/Typography';
import { withAttrs } from './helpers/withAttrs';
import { Header } from './sections/Header';
import { Color, globalColors } from './tokens/colors';
import { globalFonts } from './tokens/fonts';
import { IconName, SpriteWithIcons } from './tokens/icons';
import { globalNormalize } from './tokens/normalize';
import { globalRadiuses } from './tokens/radiuses';
import { globalResets } from './tokens/resets';

const StyledTitle = withAttrs(
  {
    as: 'h2',
    variant: TypographyVariant.TITLE_2,
  },
  styled(Typography)`
    margin-bottom: 8px;
  `,
);

const StyledText = withAttrs(
  {
    as: 'p',
    variant: TypographyVariant.TEXT_1,
    color: Color.ORANGE_10,
  },
  Typography,
);

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledStarIcon = withAttrs(
  {
    name: IconName.STAR,
    size: IconSize.LARGE,
  },
  Icon,
);

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
      <Header />

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
      </div>
      <div>
        <Input placeholder="Type something" />
        <Input
          as="textarea"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
      </div>
      <FormRating />

      <Filter label="Sort by:">
        <option>Popular</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
        <option>Top rated first</option>
      </Filter>

      <Card variant={CardVariant.HORIZONTAL} />
      <Card variant={CardVariant.VERTICAL} />

      <Rating size={RatingSize.LARGE} rating={4} />
    </>
  );
}

export { App };
