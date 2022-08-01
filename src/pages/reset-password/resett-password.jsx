import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

export function ResetPasswordPage() {
  /*  let auth = useAuth();*/

  const [form, setValue] = useState({ code: "", password: "" });

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
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={`text text_type_main-medium ${styles.header}`}>Восстановление пароля</h1>
          <div className={styles.wrapper}>
            <Input
              type={"password"}
              placeholder={"Введите новый пароль"}
              onChange={onChange}
              value={form.password}
              name={"password"}
              errorText={"Ошибка"}
              size={"default"}
            />
            <Input
              type={"text"}
              placeholder={"Введите код из письма"}
              onChange={onChange}
              value={form.code}
              name={"code"}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button onClick={login} primary={true}>
            Восстановить
          </Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Вспомнили пароль? <Link
          to="/registration/login"
          className={`text text_type_main-default ${styles.link}`}>Войти</Link></p>
      </div>
    </div>
  )
    ;
}