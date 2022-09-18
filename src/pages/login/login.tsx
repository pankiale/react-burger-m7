import React, { useCallback, useState } from "react";
import { Link} from "react-router-dom";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { getLoginThunk } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

export function LoginPage() {
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector(state => state.auth);
  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const isDisabled = Boolean(!form.email && !form.password);

  const login = useCallback(
    (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(getLoginThunk(form));
    },
    [form]
  );

  return (
    <div className={styles.wrapper_container}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={login}>
          <h1 className={`text text_type_main-medium ${styles.header}`}>Вход</h1>
          <div className={styles.wrapper}>
            <EmailInput /*placeholder="Email"*/ value={form.email} name="email" onChange={onChange} />
            <PasswordInput
              /*placeholder="Password"*/
              value={form.password}
              name="password"
              onChange={onChange}
            />
          </div>
          <Button type={"primary"} disabled={isDisabled}>
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