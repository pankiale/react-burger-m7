import React, { useEffect} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientList from "../ingredient-list/ingredient-list";
import { tabSwitchAction } from "../../services/actions/ingredients";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "../../services/hooks/hooks";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const {currentTab} = useSelector(state => state.ingredients);

  const handleClick = (value: string) => {
    (document.querySelector("#" + value) as HTMLDivElement).scrollIntoView();
    dispatch(tabSwitchAction(value));
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
        dispatch(tabSwitchAction("bun"));
      } else if (tabSauce) {
        dispatch(tabSwitchAction("sauce"));
      } else if (tabMain) {
        dispatch(tabSwitchAction("main"));
      }
    }, [dispatch, tabBun, tabSauce, tabMain]
  );

  return (
    <>
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
