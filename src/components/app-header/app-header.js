import styles from './app-header.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = ({title, children}) => {
    return (
        <header className={`${styles.header} pl-5`}>
                <nav className="pl-5 pr-5 pb-4 pt-4">
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
                <nav className="pl-5 pr-5 pb-4 pt-4">
                    <ul className={styles.header__login}>
                            <a class="text text_type_main-default" href="profile.html">
                            <ProfileIcon type="secondary" />Личный кабинет
                            </a>
                    </ul>
                </nav>
            </header>
    )
}

export default AppHeader;
