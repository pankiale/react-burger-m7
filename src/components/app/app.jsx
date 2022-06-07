import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import Modal from "../modals/modals";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";

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

  const [openModalIngr, setOpenModalIngr] = useState(false);
  const [renderData, setRenderData] = useState([]);

  const onIngrClick = (data) => {
    setOpenModalIngr(true);
    setRenderData({ data });
  };

  const onCloseBtnClick = () => {
    setOpenModalIngr(false);
    setOpenModalOrder(false);
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && onCloseBtnClick();
  };

  return (
    <div className={styles.app}>
      {openModalIngr && (
        <>
          <Modal
            handleCloseClick={onCloseBtnClick}
            onEscKeydown={handleEscKeydown}
            header="Детали ингредиента"
          >
            <IngredientDetails data={renderData} />
          </Modal>
          <ModalOverlay handleCloseClick={onCloseBtnClick} />
        </>
      )}

      <AppHeader />
      <main className={styles.app__main}>
        {cards.length && (
          <>
            <BurgerIngredients handleClick={onIngrClick} data={cards} />
            <BurgerConstructor data={cards} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
