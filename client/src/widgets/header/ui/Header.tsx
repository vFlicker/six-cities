import styled from '@emotion/styled';

import { authModel } from '~/entities/auth';
import { Logout } from '~/features/auth';
import { AppRoute } from '~/shared/libs/router';
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
  const isAuthenticated = authModel.useAuthStore(authModel.getIsAuthenticated);

  return (
    <header className={className}>
      <StyledContainer>
        <StyledInner>
          <StyledLeft>
            <Logo />
          </StyledLeft>
          {hasMenu && !isAuthenticated && (
            <StyledRight>
              <StyledTextLinksItem>
                <TextLink to={AppRoute.Login}>
                  <StyledUserIcon /> Sign in
                </TextLink>
              </StyledTextLinksItem>
            </StyledRight>
          )}
          {hasMenu && isAuthenticated && (
            <StyledRight>
              <StyledTextLinksList>
                <StyledTextLinksItem>
                  <TextLink to="/">
                    <StyledUserIcon />
                    Oliver.conner@gmail.com
                  </TextLink>
                </StyledTextLinksItem>
                <StyledTextLinksItem>
                  <Logout />
                </StyledTextLinksItem>
              </StyledTextLinksList>
            </StyledRight>
          )}
        </StyledInner>
      </StyledContainer>
    </header>
  );
}

export { Header };

const StyledContainer = styled.nav`
  ${ContainerMixin}
`;

const StyledInner = styled.div`
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
