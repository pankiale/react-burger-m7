import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import Modal from "../modals/modals";

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

  const [openModal, setOpenModal] = useState(true)

  const onClick = () => {
      setOpenModal(true)
    };
  
  return (
    <div className={styles.app}>
      <Modal />
      <AppHeader />
      <main className={styles.app__main}>
        {cards.length && (
          <>
            <BurgerIngredients сlick={onClick} data={cards} />
            <BurgerConstructor data={cards} /> 
          </>
        )}
      </main>
    </div>
  );
}

export default App;
