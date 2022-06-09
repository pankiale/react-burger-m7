import styles from "./order_details.module.css";
import done from "../../../images/done.svg"
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
          <img src={done} alt="иконка" className={styles.ordr__check_icon}/>
          <p
            className={`${styles.popup__price} text text_type_main-default mb-2`}
          >
            Ваш заказ начали готовить
          </p>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive mb-15`}
          >
            Дождитесь готовности на орбитальной станции
          </p>
    </section>
  );
};

export default OrderDetails;
