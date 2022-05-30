import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
/*Геннадий, гляньте, пожалуйста, API и  scrollIntoView, если будет время, спасибо большое*/
function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = () => {
    api.fetch().then((response) => {
      const card = response.data.map((item) => item);
      setCards(card);
    });
  };

  console.log(cards);

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
