import styled from '@emotion/styled';

import { amsterdam2xPhotoSrc, amsterdamPhotoSrc } from '~/assets/images';

import { Container as BaseContainer, Page as BasePage } from '../../shared';

export const Page = styled(BasePage)`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to right, #f5f5f5 509px, transparent 509px),
    url(${amsterdamPhotoSrc});
  background-position: top left, right top;
  height: 100vh;
  background-size: auto, auto 100%;
  background-repeat: no-repeat, no-repeat;
  overflow: hidden;

  @media (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi),
    (min-resolution: 1.5dppx) {
    background-image: linear-gradient(
        to right,
        #f5f5f5 509px,
        transparent 509px
      ),
      url(${amsterdam2xPhotoSrc});
  }

  @media (max-height: 720px) {
    background-size: auto, auto 715px;
  }
`;

export const Container = styled(BaseContainer)`
  display: flex;
`;
