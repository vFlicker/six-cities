import { useAppSelector } from '~/shared/hooks';

import { selectUser } from '../../model/user';

export function UserEmail(): JSX.Element | null {
  const user = useAppSelector(selectUser);

  return user && <span>{user.email}</span>;
}
