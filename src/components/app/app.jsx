import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import {DataContext} from "../../services/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/ingredients";

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

  console.log(ingredients)

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.app__main}>
        {ingredients.length && (
          <>
            <DataContext.Provider value={{ingredients}}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DataContext.Provider>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
