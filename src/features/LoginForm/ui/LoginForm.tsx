import { ChangeEvent, FormEvent, useState } from 'react';

import { login } from '~/shared/apiActions';
import { useAppDispatch } from '~/shared/hooks';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';

import classes from './LoginForm.module.css';

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (email !== '' || password !== '') {
      const data = { email, password };
      await dispatch(login(data));

      setEmail('');
      setPassword('');
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        label="E-mail"
        className={classes.input}
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        label="Password"
        className={classes.input}
        type="password"
        name="password"
        autoComplete="on"
        placeholder="Password"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" className={classes.button}>
        Sign in
      </Button>
    </form>
  );
}
