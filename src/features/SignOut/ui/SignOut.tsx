import { signOut } from '~/shared/apiActions';
import { useAppDispatch } from '~/shared/hooks';

import classes from './SignOut.module.css';

export function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(signOut());

  return (
    <button className={classes.button} onClick={handleClick}>
      Sign out
    </button>
  );
}
