import { authModel } from '~/entities/auth';
import { useAppDispatch } from '~/shared/libs/state';
import { dropToken } from '~/shared/libs/token';
import { TextButton } from '~/shared/ui/TextButton';

function Logout(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authModel.logout());
    dropToken();
  };

  return <TextButton onClick={handleLogout}>Sign out</TextButton>;
}

export { Logout };
