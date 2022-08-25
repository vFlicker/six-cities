import styled from '@emotion/styled';

type ListProps = {
  isOpen: boolean;
};

type ItemProps = {
  isActive: boolean;
};

export const From = styled.form`
  position: relative;
  margin-bottom: 33px;
  padding-left: 5px;
`;

export const Caption = styled.span`
  font-size: 12px;
  line-height: 1.167;
  font-weight: 700;
`;

export const Type = styled.span`
  position: relative;
  display: inline-block;
  padding-right: 12px;
  font-size: 12px;
  line-height: 1.167;
  cursor: pointer;
`;

export const Arrow = styled.svg`
  position: absolute;
  top: 55%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
  fill: #0d0d0d;
`;

export const List = styled.ul<ListProps>`
  position: absolute;
  top: calc(100% + 1px);
  left: 52px;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

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
