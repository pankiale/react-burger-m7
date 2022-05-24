import styles from './app-header.module.css'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = ({title, children}) => {
    return (
        <header className={styles.header}>
                <nav>
                    <ul className={styles.header__navigation}>
                        <li class="header__button">
                            <p class="header__link">
                                <img class="header__icon" src="images/courses-icon-active.svg" alt="Курсы"/>Курсы
                            </p>
                        </li>
                        <li class="header__button">
                            <a class="header__link header__link_active" href="profile.html">
                                <img class="header__icon" src="images/profile-icon.svg" alt="Профиль"/>Профиль
                            </a>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <nav>
                    <ul className={styles.header__login}>
                            <a class="header__link header__link_active" href="profile.html">
                                <img class="header__icon" src="images/profile-icon.svg" alt="Профиль"/>Профиль
                            </a>
                    </ul>
                </nav>
            </header>
    )
}

export default AppHeader;
