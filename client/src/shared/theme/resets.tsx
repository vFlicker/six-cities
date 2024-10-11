import { css } from '@emotion/react';

import { Color } from './colors';
import { Font } from './fonts';
import { Radius } from './radiuses';

const globalResets = css`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${Color.GRAY_30};
      border-radius: ${Radius.RADIUS_4};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${Radius.RADIUS_4};
      background-color: ${Color.BLUE_30};
    }
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
  }

  textarea {
    resize: none;
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
