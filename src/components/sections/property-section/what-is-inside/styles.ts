import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 52px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.1667;
  font-weight: 700;
  font-style: oblique;
  text-align: center;
  color: #000;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Item = styled.li`
  position: relative;
  width: 100%;
  max-width: 174px;
  padding-left: 18px;
  font-size: 16px;
  line-height: 1.75;
  color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    left: 0;
    width: 12px;
    height: 1px;
    background-color: #000;
  }
`;
