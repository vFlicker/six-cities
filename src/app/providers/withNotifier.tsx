import { ComponentType } from 'react';

import { Notifier } from '~/shared/services/notifier';

export const withNotifier = (Component: ComponentType): ComponentType => {
  function WithNotifier(): JSX.Element {
    return (
      <>
        <Notifier />
        <Component />
      </>
    );
  }

  return WithNotifier;
};
