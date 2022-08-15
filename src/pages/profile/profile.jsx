import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { getChangeUser, getLogout, getRegistration } from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../../components/app-header/app-header";

export function ProfilePage() {

  const { regSuccess, regFailed, user } = useSelector(state => state.auth);
  const [userTemp, setUserTemp] = useState(user);
  const [form, setValue] = useState({ email: userTemp.email, password: "", name: userTemp.name });
  const dispatch = useDispatch();
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const onCancel = () => {
    setValue({ email: userTemp.email, password: "", name: userTemp.name });
  };
  const changeUser = useCallback((e) => {
    debugger
    e.preventDefault();
    dispatch(getChangeUser(form))
      .then(setUserTemp({email: form.email, password: "", name: form.name}))
  }, [form, dispatch, user]);

  const isDisabled = Boolean(form.email === userTemp.email && form.name === userTemp.name);
  const refreshToken = localStorage.getItem("refreshToken");

  const handleLogout = () => {
    dispatch(getLogout(refreshToken))
      .catch((err) => {
        console.error("Что то пошло не так", err);
      });
  };

  return (
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <NavLink to={{ pathname: "/profile" }} activeClassName={styles.link_active}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Профиль</NavLink>
          <NavLink to={{ pathname: "/profile/orders" }} activeClassName={styles.link_active}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>История Заказов</NavLink>
          <NavLink to={{ pathname: "/login" }} activeClassName={styles.link_active} onClick={handleLogout}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Выход</NavLink>
          <p className={"text text_type_main-small text_color_inactive mt-20"}>В этом разделе вы можете
            изменить свои персональные данные</p>
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
            <Button onClick={onCancel} type="secondary" disabled={isDisabled}>
              Отмена
            </Button>
            <Button onClick={changeUser} primary={true} disabled={isDisabled}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}