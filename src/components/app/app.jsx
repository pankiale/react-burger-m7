import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    api
    .getIngredients()
    .then((response) => {
      const card = response.data.map((item) => item);
      setCards(card);
    })
    .catch((err) => console.log(`Ошибка ${err.status}`));
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.app__main}>
        {cards.length && (
          <>
            <BurgerIngredients data={cards} />
            <BurgerConstructor data={cards} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
