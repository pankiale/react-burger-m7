import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={`${styles.header} p-4`}>
      <nav>
        <ul className={styles.header__navigation}>
          <li>
            <a className={`${styles.header__button} ${styles.header__button_active} pt-4 pb-4 pl-5 pr-5 mr-2`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default ml-2">Конструктор</p>
            </a>
          </li>
          <li>
            <a className={`${styles.header__button} pt-4 pb-4 pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Лента Заказов
            </p>
            </a>
          </li>
        </ul>
      </nav>
      <Logo />
      <nav>
        <ul className={styles.header__login}>
          <li>
            <a className={`${styles.header__button} pt-4 pb-4 pl-5 pr-5`}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
