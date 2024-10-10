import styled from '@emotion/styled';

import { Container } from '~/shared/ui/Container';
import { Color } from '~/shared/theme/colors';
import { Logo } from '~/shared/ui/Logo';

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps): JSX.Element {
  return (
    <footer className={className}>
      <StyledContainer>
        <Logo width="64" height="33" />
      </StyledContainer>
    </footer>
  );
}

export { Footer };

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 48px;
  padding-bottom: 52px;
  border-top: 2px solid ${Color.GRAY_20};
`;
