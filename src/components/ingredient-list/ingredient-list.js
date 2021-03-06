import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import styles from "./ingredient-list.module.css";
import { useSelector } from "react-redux";

const IngredientList = React.forwardRef(({ title, id, ingredient, openModal }, ref) => {
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
                <Card data={item} clicker={openModal} />
              </li>
            );
          })}
      </ul>
    </div>
  );
});

IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredient: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
  openModal: PropTypes.func.isRequired
};

export default IngredientList;
