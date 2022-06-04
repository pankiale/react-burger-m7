import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import Modal from "../modals/modals";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";
import OrderDetails from "../modals/order-details/order-details";

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

  const [openModalIngr, setOpenModalIngr] = useState(false);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [renderData, setRenderData] = useState([]);

  const onIngrClick = (data) => {
    setOpenModalIngr(true);
    setRenderData({ data });
  };

  const onOrderClick = () => {
    setOpenModalOrder(true);
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
      {openModalOrder && (
        <>
          <Modal
            handleCloseClick={onCloseBtnClick}
            onEscKeydown={handleEscKeydown}
            header=""
          >
            <OrderDetails />
          </Modal>
          <ModalOverlay handleCloseClick={onCloseBtnClick} />
        </>
      )}
      <AppHeader />
      <main className={styles.app__main}>
        {cards.length && (
          <>
            <BurgerIngredients handleClick={onIngrClick} data={cards} />
            <BurgerConstructor handleClick={onOrderClick} data={cards} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
