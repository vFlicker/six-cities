import { dropToken } from '~/shared/libs/token';
import { TextButton } from '~/shared/ui/TextButton';

function Logout(): JSX.Element {
  const handleLogout = () => {
    dropToken();
  };

  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}

export { Logout };
