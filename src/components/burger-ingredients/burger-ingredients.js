import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modals/modals";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";

function BurgerIngredients() {
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

  const [openModalIngr, setOpenModalIngr] = useState(false);
  const [renderData, setRenderData] = useState([]);

  const onIngrClick = (data) => {
    setOpenModalIngr(true);
    setRenderData({ data });
  };

  const onCloseBtnClick = () => {
    setOpenModalIngr(false);
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && onCloseBtnClick();
  };
  return (
    <>
      {openModalIngr && (
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
