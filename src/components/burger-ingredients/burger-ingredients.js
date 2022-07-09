import React, { useEffect, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modals/modals";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { TAB_SWITCH, TOGGLE_MODAL } from "../../services/actions/burgerIngredients";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const {currentTub, isModalOpen} = useSelector(state => state.burgerIngredients);

  const bun = useRef(null);
  const sauce = useRef(null);
  const main = useRef(null);

  const handleClick = (value) => {
    dispatch({
      type: TAB_SWITCH,
      value
    })
  };

  useEffect(
    () => {
      currentTub === "bun"
        ? bun.current.scrollIntoView()
        : currentTub === "sauce"
          ? sauce.current.scrollIntoView()
          : main.current.scrollIntoView();
    },
    [currentTub]
  );

  const [renderData, setRenderData] = useState([]);

  const onIngrClick = (data) => {
    dispatch({
      type: TOGGLE_MODAL
    })
    setRenderData({ data });
  };

  const onCloseBtnClick = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && onCloseBtnClick();
  };
  return (
    <>
      {isModalOpen && (
        <>
          <Modal
            handleCloseClick={onCloseBtnClick}
            onEscKeydown={handleEscKeydown}
            header="Детали ингредиента"
          >
            <IngredientDetails data={renderData} />
          </Modal>
        </>
      )}
      <section
        className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}
      >
        <h1 className="text text_type_main-large mb-5"> Соберите бургер</h1>
        <div className={styles.ingredients__tab}>
          <Tab value="bun" active={currentTub === "bun"} onClick={handleClick}>
            Булки
          </Tab>
          <Tab value="sauce" active={currentTub === "sauce"} onClick={handleClick}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTub === "main"} onClick={handleClick}>
            Начинка
          </Tab>
        </div>
        <div className={styles.ingredients__menu}>
          <IngredientList
            ref={bun}
            title="Булки"
            ingredient="bun"
            openModal={onIngrClick}

          />
          <IngredientList
            ref={sauce}
            title="Соусы"
            ingredient="sauce"
            openModal={onIngrClick}
          />
          <IngredientList
            ref={main}
            title="Начинки"
            ingredient="main"
            openModal={onIngrClick}
          />
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
