import styled from '@emotion/styled';

import { triangleIconSrc } from '~/assets/images';

export const Gallery = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 784px;
  margin-right: auto;
  margin-left: auto;
  max-height: 452px;
  margin-bottom: 30px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    width: 34px;
    height: 100%;
    background-image: url(${triangleIconSrc});
    background-repeat: no-repeat;
    background-size: 34px 452px;
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 34px;
    height: 100%;
    background-image: url(${triangleIconSrc});
    background-repeat: no-repeat;
    background-size: 34px 452px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  margin-right: 2px;
  width: 260px;
  height: 200px;
  overflow: hidden;

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  display: block;
  min-width: 100%;
  min-height: 100%;
  flex-grow: 1;
`;
