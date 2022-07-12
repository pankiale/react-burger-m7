import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/ingredients";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const dispatch = useDispatch();
  const {ingredients}
    = useSelector(
    state => state.ingredients
  );
  useEffect(
    () => {
      dispatch(getItems());
    },
    []
  );

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.app__main}>
        {ingredients.length && (
          <>
          <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
          </DndProvider>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
