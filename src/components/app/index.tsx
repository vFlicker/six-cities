import { useAppSelector } from '~/hooks';
import { userSlice } from '~/store';

import { Pages } from '../pages';
import { Spinner } from '../shared';

export function App(): JSX.Element {
  const isAuthChecked = useAppSelector(userSlice.selectIsAuthChecked);
  const isLoading = useAppSelector(userSlice.selectIsLoading);
  // const error = useAppSelector(userSlice.selectError);

  if (!isAuthChecked || isLoading) {
    return <Spinner />;
  }

  // TODO: Error 401
  // if (error) return <ErrorMessage />;

  return <Pages />;
}
