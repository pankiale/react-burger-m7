import styles from './app-header.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Typography } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = ({title, children}) => {
    return (
        <header className={styles.header}>
                <nav>
                    <ul className={styles.header__navigation}>
                        <li class="header__button">
                            <p className='text text_type_main-default'>
                               <BurgerIcon type="primary" /> Конструктор
                            </p>
                        </li>
                        <li class="header__button">
                            <a className='text text_type_main-default text_color_inactive' href="profile.html">
                            <ListIcon type="secondary" /> Лента Заказов
                            </a>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <nav>
                    <ul className={styles.header__login}>
                            <a class="header__link header__link_active" href="profile.html">
                            <ProfileIcon type="secondary" />Профиль
                            </a>
                    </ul>
                </nav>
            </header>
    )
}

export default AppHeader;
