import React, { useCallback, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { getLogin } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";

export function LoginPage() {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector(state => state.auth);
  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const isDisabled = Boolean(!form.email && !form.password);

  const login = useCallback(
    e => {
      e.preventDefault();
      dispatch(getLogin(form));
    },
    [form]
  );

  return (
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={login}>
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
          <Button primary={true} disabled={isDisabled}>
            Войти
          </Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Вы новый
          пользователь? <Link to="/registration"
                              className={`text text_type_main-default ${styles.link}`}>Зарегистрироваться</Link></p>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Забыли пароль? <Link
          to="/forgot-password"
          className={`text text_type_main-default ${styles.link}`}>Восстановить пароль</Link></p>
      </div>
    </div>
  );
}