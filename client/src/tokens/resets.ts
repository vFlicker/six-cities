import { css } from '@emotion/react';

import { Color } from './colors';
import { Font } from './fonts';

const globalResets = css`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: 16px;
    line-height: 1.2;
    color: ${Color.GRAY_90};
    font-family: ${Font.Rubik};
    background-color: ${Color.GRAY_10};
  }

  textarea {
    resize: none
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  div#root {
    height: 100%;
  }
`;

export { globalResets };
