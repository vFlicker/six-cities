import styled from '@emotion/styled';

import { IconName } from '~/shared/theme/icons';
import { ContainerMixin } from '~/shared/ui/Container';
import { Icon } from '~/shared/ui/Icon';
import { Logo } from '~/shared/ui/Logo';
import { TextLink } from '~/shared/ui/TextButton';
import { withAttrs } from '~/shared/ui/withAttrs';

type HeaderProps = {
  hasMenu?: boolean;
  className?: string;
};

function Header({ className, hasMenu = true }: HeaderProps): JSX.Element {
  return (
    <header className={className}>
      <StyledNavigation>
        <StyledWrapper>
          <StyledLeft>
            <Logo />
          </StyledLeft>
          {hasMenu && (
            <StyledRight>
              <StyledTextLinksList>
                <StyledTextLinksItem>
                  <TextLink to="/">
                    <StyledUserIcon />
                    Oliver.conner@gmail.com
                  </TextLink>
                </StyledTextLinksItem>
                <StyledTextLinksItem>
                  <TextLink to="/">Sign out</TextLink>
                </StyledTextLinksItem>
              </StyledTextLinksList>
            </StyledRight>
          )}
        </StyledWrapper>
      </StyledNavigation>
    </header>
  );
}

export { Header };

const StyledNavigation = styled.nav`
  ${ContainerMixin}
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
`;

const StyledLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  margin-right: auto;
`;

const StyledRight = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  margin-top: 11px;
  margin-left: 30px;
`;

const StyledTextLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;
`;

const StyledTextLinksItem = styled.li`
  display: flex;
  gap: 15px;
  min-height: 25px;
`;

const StyledUserIcon = withAttrs({ name: IconName.User }, Icon);
