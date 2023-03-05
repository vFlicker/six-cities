import { useEffect } from 'react';

import { Routing } from '~/pages/Routing';
import { checkAuthStatus } from '~/shared/apiActions';
import { useAppDispatch } from '~/shared/hooks';

import { withProviders } from './providers';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return <Routing />;
}

export default withProviders(App);
