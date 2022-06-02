import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import Modal from "../modals/modals";
import { render } from "react-dom";

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

  const [openModalIngr, setOpenModalIngr] = useState(false)
  const [renderData, setRenderData] = useState([]) 

  const onClick = (data) => {
      setOpenModalIngr(true)
      setRenderData({data})
    };
  
  return (
    <div className={styles.app}>
      {openModalIngr && 
      <Modal header="Детали ингредиента">
         <img src={renderData.data.image_large} alt={renderData.data.name} className={styles.card__image} />
      <p
        className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}
      >
        {renderData.data.proteins}
      </p>
      <p className={`${styles.card__title} text text_type_main-default`}>
        {renderData.data.name}
      </p>
      </Modal>}
      <AppHeader />
      <main className={styles.app__main}>
        {cards.length && (
          <>
            <BurgerIngredients handleClick={onClick} data={cards} />
            <BurgerConstructor data={cards} /> 
          </>
        )}
      </main>
    </div>
  );
}

export default App;
