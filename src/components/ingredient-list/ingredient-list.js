import React from "react";
import { forwardRef } from "react";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import Card from "../card/card";
import styles from "./ingredient-list.module.css";

const IngredientList = React.forwardRef (({ title, ingredient, data }, ref) => {

  return (
    <div className={styles.ingredients__item}>
      <p ref = {ref} className="text text_type_main-medium">{title}</p>
      <ul className={`${styles.ingredients__list} pl-4 pr-4 pt-6`}>
        {data.data
          .filter((item) => item.type === ingredient)
          .map((item) => {
            return (
              <li key={item._id}>
                <Card {...item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
});

IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  ingredient: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
  data: PropTypes.objectOf(PropTypes.arrayOf(dataTypes.isRequired).isRequired).isRequired,
};

export default IngredientList;
