import React from "react";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list"


BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
};

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("bun");

  return (
    <section className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}>
      <h1 className="text text_type_main-large mb-5"> Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинка
        </Tab>
      </div>
      <div className={styles.ingredients__menu}>
        <IngredientList title="Булки" ingredient="bun" data={props} />
        <IngredientList title="Соусы" ingredient="sauce" data={props} />
        <IngredientList title="Начинки" ingredient="main" data={props} />
      </div>
    </section>
  );
}

export default BurgerIngredients;
