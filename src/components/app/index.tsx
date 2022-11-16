import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Pages } from '../pages';
import { ErrorBoundary, Spinner } from '../shared';

export function App(): JSX.Element {
  const authStatus = useAppSelector(userSlice.getAuthStatus);
  const isLoading = useAppSelector(userSlice.getLoadingStatus);

  if (userSlice.isCheckedAuth(authStatus) || isLoading) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary>
      <Pages />
    </ErrorBoundary>
  );
}
