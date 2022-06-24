import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from "./total-bill";
import { useState } from "react";
import Modal from "../modals/modals";
import OrderDetails from "../modals/order-details/order-details";
import { TotalPriceContext } from "../../services/totalPriceContext";

function BurgerConstructor() {

  const [totalPrice, setTotalPrice] = useState(0)

  const [openModalOrder, setOpenModalOrder] = useState(false);

  const onOrderClick = () => {
    setOpenModalOrder(true);
  };

  const onCloseBtnClick = () => {
    setOpenModalOrder(false);
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && onCloseBtnClick();
  };

  return (
    <>
      <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
      {openModalOrder && (
        <>
          <Modal
            handleCloseClick={onCloseBtnClick}
            onEscKeydown={handleEscKeydown}
            header=""
          >
            <OrderDetails />
          </Modal>
        </>
      )}
      <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
        <IngredientSection filter="main" />
        <div className={styles.ingredients__shopping_cart}>
          <TotalBill />
          <Button onClick={onOrderClick} type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
      </TotalPriceContext.Provider>
    </>
  );
}

export default BurgerConstructor;
