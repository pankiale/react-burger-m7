import styles from './card.module.css'

const Card = ({name, price, image}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.card__image}/>
            <p className="card__title">{name}</p>
            <p className="card__price">{price}</p>
        </div>
    )
}

export default Card 