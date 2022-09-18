import React, { useCallback, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { getResetPasswordThunk } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

export function ResetPasswordPage() {

  const [form, setValue] = useState({ password: "", token: "" });
  const dispatch = useDispatch();
  const {forgotPasswordSuccess, resetPasswordSuccess} = useSelector(state=>state.auth)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetPassword = useCallback(
    (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getResetPasswordThunk(form));
    },
    [/*auth,*/ form]
  );

  if (!forgotPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/forgot-password'
        }}
      />
    );
  }
  if (resetPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/login'
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
              value={form.token}
              name={"token"}
              errorText={"Ошибка"}
              size={"default"}
            />
          </div>
          <Button type={"primary"}>
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