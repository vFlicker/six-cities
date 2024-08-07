import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from './elements/Button';
import { Typography, TypographyVariant } from './elements/Typography';
import { withAttrs } from './helpers/withAttrs';
import { Color, globalColors } from './tokens/colors';
import { globalFonts } from './tokens/fonts';
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
      <Button>Click me</Button>
    </>
  );
}

export { App };
