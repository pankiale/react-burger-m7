import styles from './card.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const Card = ({name, price, image}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.card__image}/>
            <p className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}>{price}<CurrencyIcon type="primary"/> </p>
            <p className={`${styles.card__title} text text_type_main-default`}>{name}</p>
        </div>
    )
}

export default Card 