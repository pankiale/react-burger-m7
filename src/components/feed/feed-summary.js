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
  console.log(ready)
  console.log(notReady)
  return (
      <section className={`${styles.ingredients__section} pl-15 pt-25`}>
        <div className={styles.ingredients__shopping_cart}>
          {ready.map(item => {
            return (<div>{item.number}</div>)
          })}
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
