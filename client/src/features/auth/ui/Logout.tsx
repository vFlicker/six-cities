import { TextButton } from '~/shared/ui/TextButton';

export function Logout(): JSX.Element {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}
