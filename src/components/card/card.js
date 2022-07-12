import PropTypes from "prop-types";
import styles from "./card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { dataTypes } from "../../utils/const"
import { useDrag } from "react-dnd";

const Card = ({ data, clicker}) => {
const handleClick = () => {
  clicker(data)
}

  const [{ opacity }, ref] = useDrag({
    type: 'items',
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <div ref={ref} onClick={handleClick} className={styles.card} style={{opacity}}>
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
  data: dataTypes.isRequired,
  clicker: PropTypes.func.isRequired,
};

export default Card;
