import { css } from '@emotion/react';

import rubikLightWoff from '~/assets/fonts/rubik-light.woff';
import rubikLightWoff2 from '~/assets/fonts/rubik-light.woff2';
import rubikRegularWoff from '~/assets/fonts/rubik-regular.woff';
import rubikRegularWoff2 from '~/assets/fonts/rubik-regular.woff2';
import rubikMediumWoff from '~/assets/fonts/rubik-medium.woff';
import rubikMediumWoff2 from '~/assets/fonts/rubik-medium.woff2';
import rubikBoldWoff from '~/assets/fonts/rubik-bold.woff';
import rubikBoldWoff2 from '~/assets/fonts/rubik-bold.woff2';

export const globalStyle = css`
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 300;
    src: url(${rubikLightWoff2}) format('woff2'),
      url(${rubikLightWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 400;
    src: url(${rubikRegularWoff2}) format('woff2'),
      url(${rubikRegularWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 500;
    src: url(${rubikMediumWoff2}) format('woff2'),
      url(${rubikMediumWoff}) format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 700;
    src: url(${rubikBoldWoff2}) format('woff2'),
      url(${rubikBoldWoff}) format('woff');
    font-display: swap;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

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

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s, opacity 0.3s;
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
    transition: color 0.3s, background-color 0.3s;
    outline: 0;
  }

  #root {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
