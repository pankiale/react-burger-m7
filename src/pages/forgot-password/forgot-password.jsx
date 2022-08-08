import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import AppHeader from "../../components/app-header/app-header";

export function ForgotPasswordPage() {
  /*  let auth = useAuth();*/

  const [form, setValue] = useState({ email: "" });

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
                type={"email"}
                placeholder={"Укажите e-mail"}
                onChange={onChange}
                value={form.email}
                name={"email"}
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
  );
}