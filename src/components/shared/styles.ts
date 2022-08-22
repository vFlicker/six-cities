import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;
`;

export const Textarea = styled.textarea`
  font-size: 16px;
  line-height: 1.1875;
  color: #383838;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;

  &::placeholder {
    font-size: 16px;
    line-height: 1.1875;
    color: #9b9b9b;
  }
`;

// TODO: look to this code
// export const menuItemClassName = css({
//   flexGrow: 1,
//   width: 0,
//   fontFamily: 'inherit',
//   fontSize: 20,
//   color: 'inherit',
//   letterSpacing: 1.5,
//   textTransform: 'uppercase',
//   textAlign: 'center',
//   svg: {
//     display: 'block',
//     width: 60,
//     margin: `0 auto ${unit}px`,
//     fill: colors.secondary,
//   },
// });

// const MenuItem = styled(Link)(menuItemClassName, {
//   textDecoration: 'none',
// });

export const NotificationSection = styled.section`
  flex-grow: 1;
  width: 100%;
  padding-top: 16.7vh;
`;

export const PageContent = styled.main`
  display: flex;
  flex-grow: 1;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
