import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1144px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 58px;
  padding-right: 58px;
`;

export const FlexContainer = styled(Container)`
  display: flex;
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
