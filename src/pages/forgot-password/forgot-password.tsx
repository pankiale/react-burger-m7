import React, { useCallback, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { getForgotPasswordThunk } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

export function ForgotPasswordPage() {

  const [form, setValue] = useState({ email: "" });
  const dispatch = useDispatch();
  const {forgotPasswordSuccess} = useSelector(store=>store.auth);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetPassword = useCallback(
    (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getForgotPasswordThunk(form));
    },
    [ form]
  );

  if (forgotPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
    );
  }

  return (
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={resetPassword}>
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
          <Button type={"primary"}>
            Восстановить
          </Button>
        </form>
        <p className={`text text_type_main-default text_color_inactive ${styles.paragraph}`}>Вспомнили пароль? <Link
          to="/login"
          className={`text text_type_main-default ${styles.link}`}>Войти</Link></p>
      </div>
    </div>
  );
}