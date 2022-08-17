import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import Modal from "../modals/modals";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { TAB_SWITCH, CLOSE_MODAL } from "../../services/actions/ingredients";
import { useInView } from "react-intersection-observer";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const {currentTab, isModalOpen} = useSelector(state => state.ingredients);

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

/*  const onCloseBtnClick = () => {
    dispatch({
      type: CLOSE_MODAL
    });
  };*/

  return (
    <>
{/*      {isModalOpen && (
        <>
          <Modal
            //handleCloseClick={onCloseBtnClick}
            header="Детали ингредиента"
          >
            <IngredientDetails />
          </Modal>
        </>
      )}*/}
      <section
        className={`${styles.ingredients__section} pl-4 pr-5 pt-10 pb-8`}
      >
        <h1 className="text text_type_main-large mb-5"> Соберите бургер</h1>
        <div className={styles.ingredients__tab}>
          <Tab value="bun" active={currentTab === "bun"} onClick={handleClick}>
            Булки
          </Tab>
          <Tab value="sauce" active={currentTab === "sauce"} onClick={handleClick}>
            Соусы
          </Tab>
          <Tab value="main" active={currentTab === "main"} onClick={handleClick}>
            Начинка
          </Tab>
        </div>
        <div className={styles.ingredients__menu}>
          <IngredientList
            id={"bun"}
            ref={refBun}
            title="Булки"
            ingredient="bun"
          />
          <IngredientList
            id={"sauce"}
            ref={refSauce}
            title="Соусы"
            ingredient="sauce"
          />
          <IngredientList
            id={"main"}
            ref={refMain}
            title="Начинки"
            ingredient="main"
          />
        </div>
      </section>
    </>
  );
}

export default BurgerIngredients;
