import PropTypes from "prop-types";
import styles from "./card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Card = ({ data, clicker}) => {

const handleClick = () => {
  clicker(data)
}

  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={data.image} alt={data.name} className={styles.card__image} />
      <p
        className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}
      >
        {data.price}
        <CurrencyIcon type="primary" />{" "}
      </p>
      <p className={`${styles.card__title} text text_type_main-default`}>
        {data.name}
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
