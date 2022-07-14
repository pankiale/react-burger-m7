import api from "../../api/api";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from "./total-bill";
import { useContext, useState } from "react";
import Modal from "../modals/modals";
import OrderDetails from "../modals/order-details/order-details";
import { BurgerIngredientsContext, TotalPriceContext } from "../../services/burgerConstructorContext";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { INCREASE_COUNTER } from "../../services/actions/ingredients";
import { ADD_INGREDIENT } from "../../services/actions/burgerConstructor";

function BurgerConstructor() {

  const dispatch = useDispatch();

  const moveItem = (item) => {
    const id = 
    dispatch({
      type: ADD_INGREDIENT,
      item
    })
    dispatch({
      type: INCREASE_COUNTER,
      item
    });

  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "items",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop (item) {
      moveItem(item);
    }
  });

  const [totalPrice, setTotalPrice] = useState('');

  const burgerIngredients = useSelector(state=>state.burgerConstructorIngredients);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const onOrderClick = () => {
    const Id = { "ingredients": burgerIngredients.map(item => item._id) };
    api.placeOrder(Id)
      .then((response) => {
        setOrderNumber(response.order.number);
      })
      .catch((err) => console.log(`Ошибка ${err.status}`));
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
      <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
          {openModalOrder && (
            <>
              <Modal
                handleCloseClick={onCloseBtnClick}
                onEscKeydown={handleEscKeydown}
                header=""
              >
                <OrderDetails orderNumber={orderNumber} />
              </Modal>
            </>
          )}
          <section ref={dropTarget} className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
            <IngredientSection />
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
