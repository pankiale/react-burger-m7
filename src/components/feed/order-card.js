import styles from "./order-card.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { dataTypes } from "../../utils/const";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getCorrectDate } from "../../utils/date";

const OrderCard = ({ data }) => {
  const history = useHistory();
  const location = useLocation();
  return (
    <Link to={{
      pathname: `/ingredients/${data._id}`,
      state: { background: location }
    }}
          className={styles.card}>
      <p className={`${styles.card__title} text text_type_digits-default`}>
        {`#${data.number}`}
      </p>
      <p className={`${styles.card__title} text text_type_digits-default`}>
        {getCorrectDate(data.updatedAt)}
      </p>
      <p className={`${styles.card__title} text text_type_main-medium`}>
        {data.name}
      </p>
      <img src={data.image} alt={data.name} className={styles.card__image} />
      {data.counter > 0 && (<div className={styles.card__counter}>
        <Counter count={data.counter} size="default" />
      </div>)}
      <p
        className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}
      >
        {data.price}
        <CurrencyIcon type="primary" />{" "}
      </p>

    </Link>
  );
};

OrderCard.propTypes = {
  data: dataTypes.isRequired
};

export default OrderCard;
