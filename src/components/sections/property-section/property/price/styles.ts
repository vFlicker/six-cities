import styled from '@emotion/styled';

export const Price = styled.div`
  position: relative;
  margin-bottom: 56px;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: calc(100% + 12px);
    width: 345px;
    height: 1px;
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.01),
      #7ca7d5
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 18px;
    right: calc(100% + 11px);
    width: 425px;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.01),
      #6899ce
    );
  }
`;

export const Value = styled.b`
  position: relative;
  padding-right: 8px;
  padding-left: 6px;
  font-size: 32px;
  line-height: 1.1875;
  font-weight: 700;
  font-style: oblique;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    right: -2px;
    height: 52px;
    width: 2px;
    background-color: #4481c3;
    -webkit-transform: skew(-12deg);
    transform: skew(-12deg);
  }
`;

export const Text = styled.span`
  font-size: 18px;
  line-height: 1.223;
  font-weight: 700;
  font-style: oblique;
  opacity: 0.48;
`;
