import React, { useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./registration.module.css";
import api from "../../api/api";

export function RegistrationPage() {
  /*  let auth = useAuth();*/

  const history = useHistory();
  const [form, setValue] = useState({ email: "", password: "", name: "" });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  let login = useCallback(
    e => {
      e.preventDefault()
      api.register(form)
        .then (resp => {
          if (resp.success === 'true') {history.replace('/')}
        })
    },
    [api, form]
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
          <h1 className={`text text_type_main-medium ${styles.header}`}>Регистрация</h1>
          <div className={styles.wrapper}>
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={onChange}
              value={form.name}
              name={'name'}
              errorText={'Ошибка'}
              size={'default'}
            />
            <Input
              type={'email'}
              placeholder={'Email'}
              onChange={onChange}
              value={form.email}
              name={'email'}
              errorText={'Ошибка'}
              size={'default'}
            />
            <PasswordInput
              placeholder="Password"
              value={form.password}
              name="password"
              onChange={onChange}
            />
          </div>
          <Button onClick={login} primary={true}>
            Зарегистрироваться
          </Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Уже зарегистрированы? <Link to="/registration/login"
                              className={`text text_type_main-default ${styles.link}`}>Войти</Link></p>
      </div>
    </div>
  );
}