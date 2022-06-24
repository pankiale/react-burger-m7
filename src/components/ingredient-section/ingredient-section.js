import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-section.module.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../services/dataContext";
import { TotalPriceContext } from "../../services/totalPriceContext";

const IngredientSection = ({ filter}) => {
  const {ingredients} = useContext(DataContext)
  const initialSetOfIngredients = ingredients
    .filter((item) => item.type === filter)
    .map(item => item);

  const [burgerIngredients, setBurgerIngredients] = useState(initialSetOfIngredients);
  const {setTotalPrice} = useContext(TotalPriceContext);

  useEffect(()=> {
    let total = ingredients[0].price * 2;
    burgerIngredients.map(item => (total += item.price));
    setTotalPrice(total);
  }, [burgerIngredients] )

  return (
    <div className={`${styles.ingredients__item} pl-4`}>
      <div className="pr-3">
        <ConstructorElement
          type="top"
          text={`${ingredients[0].name} (верх)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
          isLocked={true}
        />
      </div>

      <ul className={`${styles.ingredients__list} mt-4 mb-4 `}>
        {burgerIngredients
          .map((item, index) => {
            return (
              <li className={styles.ingredients__el} key={index}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  isLocked={false}
                  handleClose={()=>setBurgerIngredients(burgerIngredients.filter(ingr=>ingr._id !== item._id))}
                />
              </li>
            );
          })}
      </ul>
      <div className="pr-3">
        <ConstructorElement
          type="bottom"
          text={`${ingredients[0].name} (низ)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
          isLocked={true}
        />
      </div>
    </div>
  );
};

IngredientSection.propTypes = {
  filter: PropTypes.string.isRequired
};

export default IngredientSection;
