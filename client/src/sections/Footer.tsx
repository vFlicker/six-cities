import styled from '@emotion/styled';

import { Logo } from '~/elements/Logo';
import { Container } from '~/helpers/Container';
import { Color } from '~/tokens/colors';

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      <StyledContainer>
        <Logo width="64" height="33" />
      </StyledContainer>
    </StyledFooter>
  );
}

export { Footer };

const StyledFooter = styled.footer`
  background-color: ${Color.WHITE};
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 52px;
  border-top: 2px solid ${Color.GRAY_20};
`;
