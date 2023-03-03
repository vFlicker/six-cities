import { avatarIconSrc } from '~/shared/assets/images';
import { useAppSelector } from '~/shared/hooks';

import { selectUser } from '../../model/user';
import classes from './UserAvatar.module.css';

export function UserAvatar(): JSX.Element {
  const user = useAppSelector(selectUser);

  const src = user ? user.avatarUrl : avatarIconSrc;
  const alt = user ? user.name : 'User avatar';

  return (
    <img
      src={src}
      className={classes.avatar}
      width="20"
      height="20"
      alt={alt}
    />
  );
}
