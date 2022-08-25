import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spinnerAnimate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
`;

export const Item = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 4px;
  border-width: 4px;
  border-style: solid;
  border-color: #4481c3 transparent transparent transparent;
  border-radius: 50%;
  animation: ${spinnerAnimate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
