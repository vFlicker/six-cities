import { JSX } from 'react';

import { RegisterForm } from '~/features/auth';
import { cn } from '~/shared/lib/css';
import { AppRoute } from '~/shared/lib/router';
import { SlantedLink } from '~/shared/ui/atoms';
import { container } from '~/shared/ui/css';
import { Header } from '~/widget/header';

export default function RegisterPage(): JSX.Element {
  return (
    <div className={wrapperClasses}>
      <div className={containerClasses}>
        <Header isNavigationVisible={false} />
        <main className={mainClasses}>
          <div className={formWrapperClasses}>
            <RegisterForm className={formClasses} />
            <div className={formDecoratorClasses} />
          </div>
          <section className={locationClasses}>
            <SlantedLink href={AppRoute.Home} isActive>
              Amsterdam
            </SlantedLink>
          </section>
        </main>
      </div>
    </div>
  );
}

const wrapperClasses = cn('bg-gray-10');

const containerClasses = cn(
  'mx-auto flex h-screen w-6xl flex-col overflow-hidden bg-[url("/images/amsterdam.jpg")] bg-size-[auto_100%] bg-top-right bg-no-repeat [@media_(max-height:810px)]:bg-size-[810px]',
);

const mainClasses = cn(container, 'flex flex-grow');

const formWrapperClasses = cn(
  'relative w-lg pt-[19.6vh] pr-[60px] pb-[13px] pl-[13px]',
);

const formClasses = cn('relative z-1');

const formDecoratorClasses = cn(
  'border-blue-20 bg-gray-10 absolute right-0 bottom-0 h-screen w-[300px] -skew-x-6 border-r-6',
);

const locationClasses = cn('flex flex-grow items-center justify-center');
