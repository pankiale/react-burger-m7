import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modals/modals";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { TAB_SWITCH, CLOSE_MODAL } from "../../services/actions/ingredients";
import { useInView } from "react-intersection-observer";
import Card from "../card/card";
import OrderCard from "./order-card";

function FeedOrders() {
  const { orders }
    = useSelector(
    store => store.ws
  );

  return (
    <>
      <section
        className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}
      >
        <h1 className="text text_type_main-large mb-5">Лента Заказов</h1>

        <div className={styles.ingredients__menu}>
          <ul className={`${styles.ingredients__list} pl-4 pr-4 pt-6`}>
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
}

export default FeedOrders;
