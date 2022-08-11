import styles from "./home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import AppHeader from "../../components/app-header/app-header";

function Home() {
  const dispatch = useDispatch();
  const { ingredients }
    = useSelector(
    state => state.ingredients
  );

  return (
      <main className={styles.app__main}>
        {ingredients.length && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
      </main>
  );
}

export default Home;
