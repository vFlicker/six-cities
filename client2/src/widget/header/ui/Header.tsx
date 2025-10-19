import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Logo, TextLink } from '~/shared/ui/atoms';
import { containerClasses } from '~/shared/ui/css';
import { UserIcon } from '~/shared/ui/icons';

type HeaderProps = {
  isNavigationVisible?: boolean;
  className?: string;
};

export function Header({
  className,
  isNavigationVisible = true,
}: HeaderProps): JSX.Element {
  return (
    <header className={className}>
      <div className={cn(`${containerClasses.lg}`)}>
        <div className={cn('flex items-start py-5')}>
          <Logo className={cn('mr-auto flex shrink-0 flex-wrap')} />
          {/* {isNavigationVisible && !isAuthenticated && ( */}
          <div className={cn('mt-3 ml-7 flex shrink-0 flex-wrap')}>
            <div className={cn('flex min-h-6 gap-4')}>
              <TextLink href={AppRoute.Login}>Login</TextLink>
              <TextLink href={AppRoute.Register}>Register</TextLink>
            </div>
          </div>
          {/* )} */}
          {/* {isNavigationVisible && isAuthenticated && (
            <StyledNav>
              <StyledTextLinksList>
                <StyledTextLinksItem>
                  <TextLink to="/">
                    <StyledUserIcon />
                    {user!.username}
                  </TextLink>
                </StyledTextLinksItem>
                <StyledTextLinksItem>
                  <Logout />
                </StyledTextLinksItem>
              </StyledTextLinksList>
            </StyledNav>
          )} */}
        </div>
      </div>
    </header>
  );
}

// const StyledTextLinksList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   gap: 15px;
// `;
