import React from "react";
import styles from "./feed.module.css";
import OrderCard from "./order-card";
import { TOrders } from "../../services/types/data";
import { useSelector } from "../../services/hooks/hooks";

function FeedOrders() {
  const { orders }: {orders: Array<TOrders>}
    = useSelector(
    store => store.ws
  );
if (orders) {
  return (
    <>
      <section
        className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}
      >
        <h1 className="text text_type_main-large mb-5">Лента Заказов</h1>

        <div className={styles.ingredients__menu}>
          <ul className={`${styles.ingredients__list} pl-4 pr-4`}>
            {orders
              .map((item) => {
                return (
                  <li key={item._id}>
                    <OrderCard data={item} />
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
} else return null;
}

export default FeedOrders;
