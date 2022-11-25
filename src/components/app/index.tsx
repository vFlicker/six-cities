import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Pages } from '../pages';
import { ErrorSection } from '../sections';
import { Spinner } from '../shared';

export function App(): JSX.Element {
  const authStatus = useAppSelector(userSlice.selectAuthStatus);
  const isLoading = useAppSelector(userSlice.selectLoadingStatus);
  const error = useAppSelector(userSlice.selectError);

  if (userSlice.isCheckedAuth(authStatus) || isLoading) {
    return <Spinner />;
  }

  if (error) return <ErrorSection />;

  return <Pages />;
}
