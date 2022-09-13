import React from "react";
import Card from "../card/card";
import styles from "./ingredient-list.module.css";
import { useSelector } from "../../services/hooks/hooks";

const IngredientList = React.forwardRef<HTMLInputElement,
  { title: string, id: string, ingredient: string }>
(({
    title,
    id,
    ingredient
  }, ref) => {

  const { ingredients }
    = useSelector(
    state => state.ingredients
  );

  return (
    <div className={styles.ingredients__item}>
      <p id={id} ref={ref} className="text text_type_main-medium">
        {title}
      </p>
      <ul className={`${styles.ingredients__list} pl-4 pr-4 pt-6`}>
        {ingredients
          .filter((item) => item.type === ingredient)
          .map((item) => {
            return (
              <li key={item._id}>
                <Card data={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default IngredientList;
