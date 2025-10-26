import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { Logo, TextLink } from '~/shared/ui/atoms';
import { container } from '~/shared/ui/css';

type HeaderProps = {
  isNavigationVisible?: boolean;
  className?: string;
};

export function Header({
  className,
  isNavigationVisible = true,
}: HeaderProps): JSX.Element {
  return (
    <header className={cn(className)}>
      <div className={containerClasses}>
        <div className={innerClasses}>
          <Logo className={logoClasses} />
          {isNavigationVisible && (
            <div className={navigationClasses}>
              <TextLink href={AppRoute.Login}>Login</TextLink>
              <TextLink href={AppRoute.Register}>Register</TextLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

const containerClasses = cn(container.lg);
const innerClasses = cn('flex items-start py-5');
const logoClasses = cn('mr-auto flex shrink-0 flex-wrap');
const navigationClasses = cn('flex min-h-6 gap-4');
