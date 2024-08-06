import { css } from '@emotion/react';

const enum Color {
  BLUE_20 = 'var(--color-blue-20)',
  BLUE_40 = 'var(--color-blue-40)',
  WHITE = 'var(--color-white)',
  GRAY_20 = 'var(--color-gray-20)',
}

const globalColors = css`
  :root {
    --color-blue-20: #4481c3;
    --color-blue-40: #3069a6;

    --color-white: #ffffff;

    --color-gray-20: #c7c7c7;
  }
`;

export { Color, globalColors };
