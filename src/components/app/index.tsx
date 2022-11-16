import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Pages } from '../pages';
import { ErrorPage } from '../pages/error-page';
import { Spinner } from '../shared';

export function App(): JSX.Element {
  const authStatus = useAppSelector(userSlice.getAuthStatus);
  const isLoading = useAppSelector(userSlice.getLoadingStatus);
  const error = useAppSelector(userSlice.getError);

  if (userSlice.isCheckedAuth(authStatus) || isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return <Pages />;
}
