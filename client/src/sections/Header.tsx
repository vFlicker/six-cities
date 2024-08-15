import styled from '@emotion/styled';

import { Icon, IconSize } from '~/elements/Icon';
import { Logo } from '~/elements/Logo';
import { TextLink } from '~/elements/TextButton';
import { ContainerMixin } from '~/helpers/Container';
import { IconName } from '~/tokens/icons';

type HeaderProps = {
  className?: string;
};

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

function Header({ className }: HeaderProps): JSX.Element {
  return (
    <header className={className}>
      <StyledNavigation>
        <StyledWrapper>
          <StyledLeft>
            <Logo />
          </StyledLeft>
          <StyledRight>
            <StyledTextLinksList>
              <StyledTextLinksItem>
                <TextLink to="/">
                  <Icon name={IconName.USER} size={IconSize.MEDIUM} />
                  Oliver.conner@gmail.com
                </TextLink>
              </StyledTextLinksItem>
              <StyledTextLinksItem>
                <TextLink to="/">Sign out</TextLink>
              </StyledTextLinksItem>
            </StyledTextLinksList>
          </StyledRight>
        </StyledWrapper>
      </StyledNavigation>
    </header>
  );
}

export { Header };
