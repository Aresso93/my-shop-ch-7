import { ServerError } from '@/shared/';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { selectAuthError, selectAuthIsLogged, useAuth } from '@/services/auth';
import { useNavigate } from 'react-router-dom';
import { useLogin } from './hooks/useLogin';

export function LoginPage() {
  const navigate = useNavigate();
  const error = useAuth(selectAuthError);
  const isLogged = useAuth(selectAuthIsLogged);
  const login = useAuth(state => state.login);

  const {
    formData, isValid, changeHandler
  } = useLogin();

  useEffect(() => {
    if (isLogged) {
      navigate('/cms')
    }
  }, [isLogged])

  function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData)
    login(formData.username, formData.password)
  }

  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      {error && <ServerError />}

      <form className="flex flex-col gap-3" onSubmit={doLogin}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={changeHandler}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />
        <button disabled={!isValid} className="btn primary" type="submit">SIGN IN</button>
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}
