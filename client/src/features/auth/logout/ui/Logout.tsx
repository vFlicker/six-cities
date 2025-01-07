import { TextButton } from '~/shared/ui/TextButton';

import { useLogout } from '../useLogout';

function Logout(): JSX.Element {
  const { handleLogout } = useLogout();
  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}

export { Logout };
