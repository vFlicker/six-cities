import { css } from '@emotion/react';

import rubikBold from '../fonts/Rubik-Bold.woff2';
import rubikLight from '../fonts/Rubik-Light.woff2';
import rubikMedium from '../fonts/Rubik-Medium.woff2';
import rubikRegular from '../fonts/Rubik-Regular.woff2';

const enum Font {
  Rubik = 'var(--font-rubik)',
}

const globalFonts = css`
  @font-face {
    font-family: 'Rubik';
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    src: url(${rubikLight});
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${rubikRegular});
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${rubikMedium});
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${rubikBold});
  }

  :root {
    --font-rubik: 'Rubik', sans-serif;
  }
`;

export { Font, globalFonts };
