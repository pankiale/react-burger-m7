import styles from "./order_details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const OrderDetails = () => {
  return (
    <section className={styles.ordr__card}>
      <p className={`${styles.ordr__number} text text_type_digits-large`}>
        034536
      </p>
          <p
            className="text text_type_main-medium"
          >
            идентификатор заказа
          </p>
          <p
            className={`${styles.popup__price}`}
          >
            <CheckMarkIcon type="primary" />
          </p>
          <p
            className={`${styles.popup__price} text text_type_digits-default text_color_inactive`}
          >
            Ваш заказ начали готовить
          </p>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive`}
          >
            Дождитесь готовности на орбитальной станции
          </p>
    </section>
  );
};

export default OrderDetails;
