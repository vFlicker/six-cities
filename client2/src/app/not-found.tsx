import { JSX } from 'react';

import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { TextLink } from '~/shared/ui/atoms';
import { defaultLayoutClasses } from '~/shared/ui/css';
import { Header } from '~/widget/header';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className={cn(defaultLayoutClasses)}>
      <Header className={cn('bg-gray-10')} />
      <div
        className={cn(
          'flex h-full flex-grow flex-col items-center overflow-y-hidden p-[30vh]',
        )}
      >
        <h1 className={cn('text-4xl font-bold italic')}>404 Not Found</h1>
        <TextLink href={AppRoute.Home}>Go to the home page</TextLink>
      </div>
    </div>
  );
}
