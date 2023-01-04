import styled from '@emotion/styled';

import { arrowSelectIconSrc } from '~/assets/images';

type ButtonProps = {
  isActive: boolean;
};

type ItemProps = {
  isActive: boolean;
};

export const Select = styled.div`
  position: relative;
  margin-bottom: 33px;
  padding-left: 5px;
`;

export const Caption = styled.span`
  font-size: 12px;
  line-height: 1.167;
  font-weight: 700;
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  padding-right: 12px;
  font-size: 12px;
  line-height: 1.167;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 55%;

    transform: ${({ isActive }) =>
      isActive ? 'translateY(-50%) scaleY(-1)' : 'translateY(-50%)'};

    width: 7px;
    height: 4px;

    background-image: url(${arrowSelectIconSrc});
  }
`;

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 1px);
  left: 52px;
  z-index: 1;
  display: block;

  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;

export const Item = styled.li<ItemProps>`
  min-width: 170px;
  padding: 14px 16px 10px;
  font-size: 14px;
  line-height: 1.2143;
  background-color: ${({ isActive }) => (isActive ? '#f2f2f2' : 'transparent')};
  transition: background-color 0.3s;
  outline: 0;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: #f2f2f2;
  }
`;
