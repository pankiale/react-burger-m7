import React, { useCallback, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

export function LoginPage() {
  /*  let auth = useAuth();*/

  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let login = useCallback(
    e => {
      e.preventDefault();
      //  a/uth.signIn(form);
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
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={`text text_type_main-medium ${styles.header}`}>Вход</h1>
          <div className={styles.wrapper}>
            <EmailInput placeholder="Email" value={form.email} name="email" onChange={onChange} />
            <PasswordInput
              placeholder="Password"
              value={form.password}
              name="password"
              onChange={onChange}
            />
          </div>
          <Button onClick={login} primary={true}>
            Войти
          </Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Вы новый
          пользователь? <Link to="/registration/registration"
                              className={`text text_type_main-default ${styles.link}`}>Зарегистрироваться</Link></p>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Забыли пароль? <Link
          to="/registration/forgot-password"
          className={`text text_type_main-default ${styles.link}`}>Восстановить пароль</Link></p>
      </div>
    </div>
  );
}