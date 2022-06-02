import React, { useRef } from "react";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
};

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("bun");
  const bun = useRef(null);
  const sauce = useRef(null);
  const main = useRef(null);

  function handleClick(value) {
    setCurrent(value);
    value === "bun"
      ? bun.current.scrollIntoView()
      : value === "sauce"
      ? sauce.current.scrollIntoView()
      : main.current.scrollIntoView();
  }

  return (
    <section className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}>
      <h1 className="text text_type_main-large mb-5"> Соберите бургер</h1>
      <div className={styles.ingredients__tab}>
        <Tab value="bun" active={current === "bun"} onClick={handleClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={handleClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={handleClick}>
          Начинка
        </Tab>
      </div>
      <div className={styles.ingredients__menu}>
        <IngredientList ref={bun} title="Булки" ingredient="bun" data={props} />
        <IngredientList
          ref={sauce}
          title="Соусы"
          ingredient="sauce"
          data={props}
        />
        <IngredientList
          ref={main}
          title="Начинки"
          ingredient="main"
          data={props}
        />
      </div>
    </section>
  );
}

export default BurgerIngredients;
