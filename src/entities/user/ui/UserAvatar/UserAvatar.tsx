import { avatarIconSrc } from '~/shared/assets/images';
import { useAppSelector } from '~/shared/hooks';

import { selectUser } from '../../model';

export function UserAvatar(): JSX.Element {
  const user = useAppSelector(selectUser);

  const src = user ? user.avatarUrl : avatarIconSrc;

  return <img src={src} width="20" height="20" alt="user name" />;
}
