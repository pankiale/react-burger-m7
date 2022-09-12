import styles from "./order-card.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getCorrectDate } from "../../utils/date";
import { TypedUseSelectorHook, useSelector as selectorHook } from "react-redux";
import React from "react";
import { TIngredients, TOrders } from "../../services/types/data";
import { RootState } from "../../services/types";

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const getIngrArray = (ingredientsOrder: Array<string>, ingredients: ReadonlyArray<TIngredients>) => {
  let ingredientsArray: Array<TIngredients> = [];
  let price = 0;
  ingredientsOrder.forEach((ingredient) => {

    ingredients.forEach(element => {
      if (element._id === ingredient) {
        ingredientsArray.push({...element, counter: 1})
        price+= element.type === 'bun' ? element.price * 2 : element.price

      }
    });

  });
  return {ingredientsArray, price}
}

/*export const getIngrDataArray = (ingredientsOrder, ingredients: TIngredients) => {
  let resultingArray = [];
  ingredientsOrder.forEach((ingredient) => {
    ingredients.forEach(element => {
      if (element._id === ingredient) {
        resultingArray.push({ element: element.image_mobile, id: element._id, price: element.price });
      }
    });
  });
  return resultingArray;
};*/


const OrderCard = ( {data}: {data: TOrders} ) => {
  const history = useHistory();
  const location = useLocation();
  const { ingredients } = useSelector(store => store.ingredients);
  const { ingredientsArray, price } = getIngrArray(data.ingredients, ingredients);
  const length = ingredientsArray.length > 6 ? `+${ingredientsArray.length - 6}` : "";

  return (
    <Link to={{
      pathname: `/feed/${data._id}`,
      state: { background: location }
    }}
          className={styles.card}>
      <div className={styles.card__info}>
        <p className={`text text_type_digits-default`}>
          {`#${data.number}`}
        </p>
        <p className={`text text_type_main-default text_color_inactive`}>
          {getCorrectDate(data.updatedAt)}
        </p>
      </div>

      <p className={`${styles.card__title} text text_type_main-medium`}>
        {data.name}
      </p>

      <div className={styles.card__image_box}>
        {ingredientsArray.length <= 6 ?
          ingredientsArray
            .map((item, index) => {
              return (
                <img key={index} src={item.image_mobile} alt="ингридиент" className={styles.card__image} />
              );
            })
          : ingredientsArray
            .slice(0, 6)
            .map((item, index) => {
              return (
                <img key={index} src={item.image_mobile} alt="ингридиент"
                     className={`${styles.card__image} ${styles.card__image_long}`} />
              );
            })
        }
        {length &&
          <p className={styles.card__counter}>{length}</p>
        }
        <p
          className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}
        >
          {price}
          <CurrencyIcon type="primary" />{" "}
        </p>
      </div>
    </Link>
  );
};
export default OrderCard;
