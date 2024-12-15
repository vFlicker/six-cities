import { TextButton } from '~/shared/ui/TextButton';

function Logout(): JSX.Element {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}

export { Logout };
