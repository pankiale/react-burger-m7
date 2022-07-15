import React, { useEffect, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modals/modals";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { TAB_SWITCH, TOGGLE_MODAL } from "../../services/actions/ingredients";
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const currentTub = useSelector(state => state.ingredients.currentTab);
  const isModalOpen = useSelector(state => state.ingredients.isModalOpen);

  const handleClick = (value) => {
    document.querySelector("#" + value).scrollIntoView();
    dispatch({
      type: TAB_SWITCH,
      value: value
    });
  };

  const [refBun, tabBun] = useInView(
    { threshold: 0 }
  );
  const [refSauce, tabSauce] = useInView(
    { threshold: 0 }
  );
  const [refMain, tabMain] = useInView(
    { threshold: 0 }
  );

  useEffect(
    () => {
      if (tabBun) {
        dispatch({
          type: TAB_SWITCH,
          value: "bun"
        });
      } else if (tabSauce) {
        dispatch({
          type: TAB_SWITCH,
          value: "sauce"
        });
      } else if (tabMain) {
        dispatch({
          type: TAB_SWITCH,
          value: "main"
        });
      }
    }, [dispatch, tabBun, tabSauce, tabMain]
  );

  const [renderData, setRenderData] = useState([]);

  const onIngrClick = (data) => {
    dispatch({
      type: TOGGLE_MODAL
    });
    setRenderData({ data });
  };

  const onCloseBtnClick = () => {
    dispatch({
      type: TOGGLE_MODAL
    });
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
            id={"bun"}
            ref={refBun}
            title="Булки"
            ingredient="bun"
            openModal={onIngrClick}
          />
          <IngredientList
            id={"sauce"}
            ref={refSauce}
            title="Соусы"
            ingredient="sauce"
            openModal={onIngrClick}
          />
          <IngredientList
            id={"main"}
            ref={refMain}
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
