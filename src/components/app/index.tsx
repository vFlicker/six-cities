import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Pages } from '../pages';
import { Spinner } from '../shared';

export function App(): JSX.Element {
  const authStatus = useAppSelector(userSlice.selectAuthStatus);
  const isLoading = useAppSelector(userSlice.selectLoadingStatus);
  // const error = useAppSelector(userSlice.selectError);

  if (userSlice.isCheckedAuth(authStatus) || isLoading) {
    return <Spinner />;
  }

  // TODO: Error 401
  // if (error) return <ErrorMessage />;

  return <Pages />;
}
