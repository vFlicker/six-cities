import styled from '@emotion/styled';

import { Logo } from '~/elements/Logo';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 52px;
`;

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <Logo width="64" height="33" />
    </StyledFooter>
  );
}

export { Footer };
