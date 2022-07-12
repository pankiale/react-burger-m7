import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-section.module.css";
import { useContext, useEffect, useState } from "react";
import { TotalPriceContext } from "../../services/burgerConstructorContext";
import { useDispatch, useSelector, useStore } from "react-redux";
import { DELETE_INGREDIENT } from "../../services/actions/burgerConstructor";

const IngredientSection = () => {

  const {setTotalPrice} = useContext(TotalPriceContext);
  const burgerIngredients = useSelector( state => state.burgerConstructorIngredients.burgerConstructorIngredients );
  const dispatch = useDispatch();
console.log(burgerIngredients)
  useEffect(()=> {
    let total = 0
    burgerIngredients.map((item) => {
      item.type === 'bun' ? total += item.price * 2 : total += item.price
    });
    setTotalPrice(total);
  }, [burgerIngredients] )

  return (
    <>
    {  burgerIngredients.length && (
      <div className={`${styles.ingredients__item} pl-4`}>
      <div className="pr-3">
        <ConstructorElement
          type="top"
          text={`${burgerIngredients[0].name} (верх)`}
          price={burgerIngredients[0].price}
          thumbnail={burgerIngredients[0].image}
          isLocked={true}
        />
      </div>

      <ul className={`${styles.ingredients__list} mt-4 mb-4 `}>
        {burgerIngredients
          .filter(item=>item.type !== 'bun')
          .map((item) => {
            return (
              <li className={styles.ingredients__el} key={Math.random().toString(36).slice(2)}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  isLocked={false}
                  handleClose={()=>dispatch({
                    type: DELETE_INGREDIENT,
                    item
                  })}
                />
              </li>
            );
          })}
      </ul>
      <div className="pr-3">
        <ConstructorElement
          type="bottom"
          text={`${burgerIngredients[0].name} (низ)`}
          price={burgerIngredients[0].price}
          thumbnail={burgerIngredients[0].image}
          isLocked={true}
        />
      </div>
    </div>
      )}
      {  !burgerIngredients.length && (
        <div className={`${styles.ingredients__item} pl-4`}>
          <p> Put ingredients here </p>
        </div>
      )}
    </>
  );
};

export default IngredientSection;
