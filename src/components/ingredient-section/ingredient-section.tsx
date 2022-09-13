import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-section.module.css";
import { useEffect} from "react";
import { setTotalPriceAction } from "../../services/actions/burgerConstructor";
import Element from "./elements";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

const IngredientSection = () => {
  const dispatch = useDispatch();
  const {
    burgerConstructorIngredients: burgerIngredients,
    burgerConstructorBuns: buns
  } = useSelector(state => state.burgerConstructorIngredients);

  useEffect(() => {
    let total = 0;
    burgerIngredients.map((item) => {
      total += item.price;
    });
    if (buns.length > 0) {
      total += buns[0].price * 2;
    }
    dispatch(setTotalPriceAction(total));
  }, [burgerIngredients, buns]);

  return (
    <>
      <div className={`${styles.ingredients__item} pl-4`}>
        {buns.length !== 0 && (
          <div className="pr-3">
            <ConstructorElement
              type="top"
              text={`${buns[0].name} (верх)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
              isLocked={true}
            />
          </div>
        )}
        <ul className={`${styles.ingredients__list} mt-4 mb-4 `}>
          {burgerIngredients
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
              text={`${buns[0].name} (низ)`}
              price={buns[0].price}
              thumbnail={buns[0].image}
              isLocked={true}
            />
          </div>
        )}
      </div>
      { burgerIngredients.length === 0 && buns.length === 0 && (
        <p> Чтобы оформить заказ начните добавлять ингредиенты бургера </p>)}
    </>
  );
};

export default IngredientSection;
