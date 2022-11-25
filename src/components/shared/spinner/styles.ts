import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spinnerAnimate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
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

  &:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  &:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  &:nth-of-type(3) {
    animation-delay: -0.15s;
  }
`;
