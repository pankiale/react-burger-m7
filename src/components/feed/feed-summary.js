import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-summary.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import { useDispatch, useSelector } from "react-redux";

function FeedSummary() {

  const {
    orders,
    total,
    totalToday,
  } = useSelector(state => state.ws);

  const ready = orders.filter(item => item.status === 'done');
  const notReady = orders.filter(item => item.status !== 'done');
  return (
      <section className={`${styles.ingredients__section} pl-15 pt-25`}>
        <div className={styles.ingredients_container}>
        <div className={styles.orders}>
          <h3 className="text text_type_main-medium mb-3">Готовы:</h3>
          <ul className={styles.orders_list}>
            {ready.slice(0,10).map((item) => (
              <li
                className={`${styles.done} text text_type_digits-default`}
                key={item._id}
              >
                {item.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.orders}>
          <h3 className="text text_type_main-medium mb-3">В работе:</h3>
          <ul className={styles.orders_list}>
            {notReady.slice(0,10).map((item) => (
              <li
                className={`${styles.pending} text text_type_digits-default`}
                key={item._id}
              >
                {item.number}
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className={styles.ingredients__total}>
          <p className={`text text_type_main-medium`}>Выполнено за все время:</p>
          <p className={`text text_type_digits-large`} >{total}</p>
        </div>
        <div className={styles.ingredients__total}>
          <p className={`text text_type_main-medium`}>Выполнено за сегодня:</p>
          <p className={`text text_type_digits-large`} >{totalToday}</p>
        </div>
      </section>
  );
};

export default FeedSummary;
