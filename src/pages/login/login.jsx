import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';

export function LoginPage() {
/*  let auth = useAuth();*/

  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

 let login = useCallback(
    e => {
      e.preventDefault();
    //  auth.signIn(form);
    },
    [/*auth,*/ form]
  );

/* if (auth.user) {
  return (
    <Redirect
      to={{
        pathname: '/'
      }}
    />
  );
}*/

return (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>

        <EmailInput placeholder="Email" value={form.email} name="email" onChange={onChange} />
        <PasswordInput
          placeholder="Password"
          value={form.password}
          name="password"
          onChange={onChange}
        />
        <Button onClick={login} primary={true}>
          Log in
        </Button>
      </form>
      <p>Вы новый пользователь?</p>
      <p>Забыли пароль?</p>
    </div>
  </div>
);
}