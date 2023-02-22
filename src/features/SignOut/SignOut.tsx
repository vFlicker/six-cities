import { useNavigate } from 'react-router-dom';

import { AppRoute } from '~/shared/constants';

import classes from './SignOut.module.css';

export function SignOut(): JSX.Element {
  const navigate = useNavigate();

  const handleClick = async () => {
    await console.log('SignOut');
    navigate(AppRoute.Root);
  };

  return (
    <button className={classes.button} onClick={handleClick}>
      Sign out
    </button>
  );
}
