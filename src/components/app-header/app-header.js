import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation } from "react-router-dom";

const AppHeader = () => {
  const { pathname } = useLocation();
  const typeBurgerIcon = pathname === "/" ? "primary" : "secondary";
  const typeProfileIcon = (pathname === "/profile" || pathname === '/profile/orders' ) ? "primary" : "secondary";
  const typeListIcon = pathname === "/feed" ? "primary" : "secondary";
  return (
    <>
      <header className={`${styles.header} p-4`}>
        <nav>
          <ul className={styles.header__navigation}>
            <li className="pt-4 pb-4 pl-5 pr-5">
              <NavLink to={{ pathname: "/"}} exact={true} activeClassName={styles.header__link_active}
                       className={`text text_type_main-default text_color_inactive ${styles.header__link}`}>
                <BurgerIcon type={typeBurgerIcon} />
                Конструктор
              </NavLink>
            </li>
            <li className="pt-4 pb-4 pl-5 pr-5">
              <NavLink to={{ pathname: "/feed"}} activeClassName={styles.header__link_active}
                       className={`text text_type_main-default text_color_inactive ${styles.header__link}`}>
                <ListIcon type={typeListIcon} />
                Лента Заказов
              </NavLink>
            </li>
          </ul>
        </nav>
        <Logo />
        <nav>
          <ul className={styles.header__login}>
            <li className="pt-4 pb-4 pl-5 pr-5">
              <NavLink to={{ pathname: "/profile" }} activeClassName={styles.header__link_active}
                       className={`text text_type_main-default text_color_inactive ${styles.header__link}`}>
                <ProfileIcon type={typeProfileIcon} />
                Личный кабинет
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
    ;
};

export default AppHeader;
