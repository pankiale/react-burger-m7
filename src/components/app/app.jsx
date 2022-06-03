import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import api from "../../api/api";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useEffect, useState } from "react";
import Modal from "../modals/modals";
import { render } from "react-dom";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
import IngredientDetails from "../modals/ingredient-details/ingredient-details";

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

  const onCloseBtnClick = () => {
      setOpenModalIngr(false)
    };
  
  
  return (
    <div className={styles.app}>
      {openModalIngr && 
      <>
      <Modal handleCloseClick={onCloseBtnClick} header="Детали ингредиента">
        <IngredientDetails data={renderData}/>
      </Modal>
      <ModalOverlay handleCloseClick={onCloseBtnClick}/>
      </>
      }
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
