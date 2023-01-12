import styled from '@emotion/styled';

import { noPlaces2xPhotoSrc, noPlacesPhotoSrc } from '~/assets/images';

import { Container as BaseContainer } from '../../../shared/container';

export const Container = styled(BaseContainer)`
  display: flex;
  height: 100%;
  padding-right: 0;
`;

export const LeftSection = styled.section`
  width: 498px;
  padding: 25.4vh 0 0 18px;
  z-index: 1;
`;

export const RightSection = styled.section`
  position: relative;
  display: flex;
  flex-grow: 1;

  background-image: url(${noPlacesPhotoSrc});
  background-size: auto 119%;
  background-repeat: no-repeat;
  background-position: right 100%;

  @media (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi),
    (min-resolution: 1.5dppx) {
    background-image: url(${noPlaces2xPhotoSrc});
  }

  @media (max-height: 780px) {
    background-position: right center;
    background-size: 100% auto;
  }

  &::before {
    content: '';

    position: absolute;
    bottom: 0;
    left: -65px;

    width: 12.06vh;
    max-width: 120px;
    min-width: 100px;
    height: 100%;

    background-color: #fff;
    border-right: 6px solid #4481c3;
    transform: skew(-6.5deg);
  }
`;
