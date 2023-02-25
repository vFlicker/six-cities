import { useNavigate } from 'react-router-dom';

import { signOut } from '~/shared/apiActions';
import { AppRoute } from '~/shared/constants';
import { useAppDispatch } from '~/shared/hooks';

import classes from './SignOut.module.css';

export function SignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = async () => {
    await dispatch(signOut());
    // TODO: move redirect to thunk
    navigate(AppRoute.ROOT);
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      Sign out
    </button>
  );
}
