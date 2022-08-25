import styled from '@emotion/styled';

import { starsActiveIconSrc, starsIconSrc } from '~/assets/images';

import { visuallyHidden } from '../styles';

export const StarsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

type StarsProps = {
  width: number;
  height: number;
};

type StarsItemProps = {
  percents: number;
} & StarsProps;

export const Stars = styled.div<StarsProps>`
  position: relative;
  display: block;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  font-size: 0;

  &::before {
    content: '';
    display: inline-block;
    width: ${({ width }) => `${width}px`};
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${starsIconSrc});
    background-size: ${({ width, height }) => `${width}px ${height}px`};
  }
`;

export const StarsItem = styled.span<StarsItemProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ percents }) => `${percents}%`};
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    display: inline-block;
    width: ${({ width }) => `${width}px`};
    height: 100%;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${starsActiveIconSrc});
    background-size: ${({ width, height }) => `${width}px ${height}px`};
  }
`;

export const HiddenText = styled.span`
  ${visuallyHidden}
`;

export const Text = styled.span`
  margin-left: 5px;
  padding-top: 3px;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  font-style: oblique;
`;
