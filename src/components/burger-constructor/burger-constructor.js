import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from './total-bill'
import { useState } from "react";
import Modal from "../modals/modals";
import ModalOverlay from "../modals/modal-overlay/modal-overlay";
import OrderDetails from "../modals/order-details/order-details";

BurgerConstructor.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
};

function BurgerConstructor(props) {

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
    <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
      <IngredientSection filter="main" data={props} />
      <div className={styles.ingredients__shopping_cart}>
        <TotalBill total={650} />
        <Button onClick={onOrderClick} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
    </>
  );
}

export default BurgerConstructor;
