import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-section.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_INGREDIENT, SET_TOTAL_PRICE } from "../../services/actions/burgerConstructor";
import { DECREASE_COUNTER } from "../../services/actions/ingredients";
import { useDrop } from "react-dnd";
import Element from "./elements";

const IngredientSection = () => {
  const dispatch = useDispatch();
  const burgerIngredients = useSelector(state => state.burgerConstructorIngredients.burgerConstructorIngredients);
  const buns = burgerIngredients.find(item => item.type === "bun") || [];
  const otherIngredients = burgerIngredients.filter(item => item.type !== "bun");

  useEffect(() => {
    let total = 0;
    burgerIngredients.map((item) => {
      item.type === "bun" ? total += item.price * 2 : total += item.price;
    });
    dispatch({
      type: SET_TOTAL_PRICE,
      value: total
    });
  }, [burgerIngredients]);

  return (
    <>
      {burgerIngredients.length ? (

          <div className={`${styles.ingredients__item} pl-4`}>

            {buns.length !== 0 && (
              <div className="pr-3">
                <ConstructorElement
                  type="top"
                  text={`${buns.name} (верх)`}
                  price={buns.price}
                  thumbnail={buns.image}
                  isLocked={true}
                />
              </div>
            )}
            <ul className={`${styles.ingredients__list} mt-4 mb-4 `}>
              {otherIngredients
                .map((item, index) => {
                  return (
                    <Element
                      key={item.key}
                      id={item.key}
                      index={index}
                      item={item} />
                  );
                })}
            </ul>
            {buns.length !== 0 && (
              <div className="pr-3">
                <ConstructorElement
                  type="bottom"
                  text={`${buns?.name} (низ)`}
                  price={buns?.price}
                  thumbnail={buns?.image}
                  isLocked={true}
                />
              </div>
            )}
          </div>
        ) :
        (
          <div className={`${styles.ingredients__item} pl-4`}>
            <p> Чтобы оформить заказ начните добавлять ингредиенты бургера </p>
          </div>
        )}
    </>
  );
};

export default IngredientSection;
