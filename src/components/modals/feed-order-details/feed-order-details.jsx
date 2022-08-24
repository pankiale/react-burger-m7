import styles from "./feed_order_details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderCard from "../../feed/order-card";
import React from "react";

const FeedOrderDetails = () => {
  const { orderId } = useParams();
  const { orders } = useSelector(store => store.ws);
  const { ingredients }
    = useSelector(
    state => state.ingredients
  );
  const data = orders?.find(item => item._id === orderId);
  return (
    <section className={styles.order__card}>
      <p className={`${styles.order__number} text text_type_digits-default`}>
        {`#${data?.number}`}
      </p>
      <p className={`${styles.order__title} text text_type_main-medium`}>
        {data?.name}
      </p>
      {data?.status === "done" ?
        <p className={`${styles.order__status} text text_type_main-default`}>Выполнен</p> :
        <p className={`text text_type_main-default`}>Готовится</p>}
      <p className={`${styles.order__sub_title} text text_type_main-medium`}>Состав</p>
      <div className={styles.order__menu}>
          <ul className={`${styles.order__list} pl-4 pr-4 pt-6`}>
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
  );
};

export default FeedOrderDetails;
