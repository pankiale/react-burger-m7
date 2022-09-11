import React, { useCallback, useState } from "react";
import { NavLink} from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import {
  GET_LOGOUT_FAILED,
  getChangeUserThunk,
  getLogoutThunk,
  refreshTokenThunk
} from "../../services/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../services/types";

export function ProfilePage() {

  const { regSuccess, regFailed, user } = useSelector(state => state.auth);
  const [form, setValue] = useState({ email: user.email, password: "", name: user.name });
  const dispatch = useDispatch();
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const onCancel = () => {
    setValue({ email: user.email, password: "", name: user.name });
  };
  const changeUser = useCallback (async (e) => {
    e.preventDefault();
    await dispatch(refreshTokenThunk())
    await dispatch(getChangeUserThunk(form))
      .catch((err)=> console.log(err))
  }, [form, dispatch, user]);

  const isDisabled = Boolean(form.email === user.email && form.name === user.name);

  const handleLogout = () => {
    dispatch(getLogoutThunk())
      .catch((err) => {
        console.error("Что то пошло не так", err);
        dispatch({
          type: GET_LOGOUT_FAILED
        });
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
          <NavLink to={{ pathname: "/" }} exact activeClassName={styles.link_active} onClick={handleLogout}
                   className={`text text_type_main-medium text_color_inactive ${styles.link}`}>Выход</NavLink>
          <p className={"text text_type_main-small text_color_inactive mt-20"}>В этом разделе вы можете
            изменить свои персональные данные</p>
        </nav>

        <form className={styles.form} onSubmit={changeUser}>
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
            <Button primary={true} disabled={isDisabled}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}