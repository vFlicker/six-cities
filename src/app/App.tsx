import { Routing } from '~/pages/Routing';

import { withProviders } from './providers';
import './index.css';

const RoutingWrapped = withProviders(Routing);

export function App(): JSX.Element {
  return <RoutingWrapped />;
}
