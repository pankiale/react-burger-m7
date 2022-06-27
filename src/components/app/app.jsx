import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import {DataContext} from "../../services/dataContext";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    api
    .getIngredients()
    .then((response) => {
      const card = response.data.map((item) => item);
      setIngredients(card);
    })
    .catch((err) => console.log(`Ошибка ${err.status}`));
  };

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
