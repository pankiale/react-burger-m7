import styles from "./feed_order_details.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_INIT } from "../../../services/actions/ws";
import { getCorrectDate } from "../../../utils/date";

export const getOrderIngrArray = (ingredientsOrder, ingredients) => {

  let ingredientsArray = [];
  ingredientsOrder?.forEach((ingredient) => {
    ingredients?.forEach(element => {
      if (element._id === ingredient) {
        ingredientsArray?.push({ ...element, counter: 1 });
      }
    });

  });
  const result = ingredientsArray?.reduce(function(prevVal, item) {
    if (!prevVal[item._id] && item.type === "bun") {
      // если ключа ещё нет в объекте, значит это первое повторение
      prevVal[item._id] = { id: item._id, name: item.name, link: item.image_mobile, price: item.price, counter: 2 };
    } else if (!prevVal[item._id] && item.type !== "bun") {
      // если дураки сабмитят бургеры с 2 булками в массиве это не моя головная боль
      prevVal[item._id] = {
        id: item._id,
        name: item.name,
        link: item.image_mobile,
        price: item.price,
        counter: item.counter
      };
    } else {
      // иначе увеличим счетчик на 1
      prevVal[item._id] = { ...prevVal[item._id], counter: prevVal[item._id].counter + 1 };
    }

    // и вернём изменённый объект
    return prevVal;
  }, {});
  // сделаем из объекта массив для рендера
  return Array.from(Object.values(result));
};

const price = (array) => {
  return array.reduce(function(prevVal, item) {
    prevVal += item.price * item.counter
    return prevVal;
  }, 0);
}

const FeedOrderDetails = ({ url }) => {
  const dispatch = useDispatch();

  const { orderId } = useParams();
  const { orders } = useSelector(store => store.ws);
  const { ingredients }
    = useSelector(
    state => state.ingredients
  );
  const data = orders?.find(item => item._id === orderId);
  const dataForOrderInrg = getOrderIngrArray(data?.ingredients, ingredients);
  const priceOrder = price(dataForOrderInrg);

  useEffect(() => {
    if (!orders) {
      dispatch({
        type: WS_CONNECTION_INIT,
        payload: url
      });

      return () => {
        dispatch({ type: WS_CONNECTION_CLOSED });
      };
    }
  }, [dispatch, orders, url]);


  if (orders) {
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
            {dataForOrderInrg
              .map((item) => {
                return (
                  <li key={item.id}>
                    <div className={styles.order__list_item}>
                      <div className={styles.order__ingredient_box}>
                        <img src={item.link} alt="ингридиент" className={styles.order__image} />
                        <p className={`${styles.order__image_title} text text_type_main-default`}>
                          {item.name}
                        </p>
                      </div>
                      <div className={`${styles.order__item_price} text text_type_digits-default`}>
                        <p>{item.counter} x {item.price}</p>
                        <CurrencyIcon type="primary" />
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.order__card_info_box} >
          <p className={`text text_type_main-default text_color_inactive`}>
            {getCorrectDate(data?.updatedAt)}
          </p>
          <p className={`${styles.order__card_info_price} text text_type_digits-default`} >
            {priceOrder}
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </section>
    );
  }
  else return (null)
};

export default FeedOrderDetails;
