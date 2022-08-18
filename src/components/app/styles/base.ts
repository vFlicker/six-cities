import { css } from '@emotion/react';

import { globalFonts } from './fonts';
import { normalize } from './normalize';

export const globalStyle = css`
  ${globalFonts}
  ${normalize}

  body,
  html {
    width: 100%;
    min-width: 1144px;
    margin: 0;
    padding: 0;
    font-family: rubik, arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.15;
    color: #383838;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color .3s, opacity .3s;
    cursor: pointer;
    outline: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  textarea {
    resize: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  button {
    padding: 0;
    background: 0 0;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    text-align: center;
    word-break: break-word;
    word-wrap: normal;
    overflow-wrap: break-word;
    transition: color .3s, background-color .3s;
    outline: 0;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
