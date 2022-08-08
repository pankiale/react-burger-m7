import React, { useCallback, useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { getRegistration } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../../components/app-header/app-header";

export function ProfilePage() {

  const { regSuccess, regFailed } = useSelector(state => state.auth);
  const [form, setValue] = useState({ email: "", password: "", name: "" });
  const dispatch = useDispatch();
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const isDisabled = Boolean(!form.email && !form.password);

  let login = useCallback(e => {
      e.preventDefault();
    }, [form]
  );

  /*  if (regSuccess) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }*/

  return (
      <div className={styles.wrapper_container}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <NavLink to={{pathname: '/profile'}} activeClassName={styles.link_active}
                     className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Профиль</NavLink>
            <NavLink to={{pathname: '/profile/orders'}} activeClassName={styles.link_active}
                     className={`text text_type_main-medium text_color_inactive ${styles.link}`}>История Заказов</NavLink>

          </nav>
          <form className={styles.form}>
            <div className={styles.wrapper}>
              <Input
                type={"text"}
                placeholder={"Имя"}
                onChange={onChange}
                value={form.name}
                name={"name"}
                errorText={"Ошибка"}
                size={"default"}
                icon={"EditIcon"}
              />
              <Input
                type={"email"}
                placeholder={"Логин"}
                onChange={onChange}
                value={form.email}
                name={"email"}
                errorText={"Ошибка"}
                size={"default"}
                icon={"EditIcon"}
              />
              <Input
                type={"password"}
                placeholder={"Пароль"}
                onChange={onChange}
                value={form.password}
                name={"password"}
                errorText={"Ошибка"}
                size={"default"}
                icon={"EditIcon"}
              />
            </div>
            <div className={styles.button_wrapper}>
              <Button onClick={login} type="secondary" disabled={isDisabled}>
                Отмена
              </Button>
              <Button onClick={login} primary={true} disabled={isDisabled}>
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </div>
  );
}