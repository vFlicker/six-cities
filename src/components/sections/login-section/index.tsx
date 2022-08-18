import { FormEvent, useRef } from 'react';

import { Button } from '@/components/shared';
import { useAppDispatch } from '@/hooks';
import { userSlice } from '@/store';

import * as S from './styles';

export function SectionLogin(): JSX.Element {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    dispatch(userSlice.login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <S.Section>
      <S.Title>Sign in</S.Title>
      <S.Form action="#" method="post" onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </S.InputWrapper>
        <Button type="submit" fullWidth>
          Sign in
        </Button>
      </S.Form>
    </S.Section>
  );
}
