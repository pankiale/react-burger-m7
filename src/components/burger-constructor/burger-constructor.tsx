import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from "./total-bill";
import Modal from "../modals/modals";
import OrderDetails from "../modals/order-details/order-details";
import { useDrop } from "react-dnd";
import {
  decreaseIngredientCounter,
  increaseIngredientCounter
} from "../../services/actions/ingredients";
import {
  placeOrderThunk,
  closeOrderModalAction, addIngredientAction
} from "../../services/actions/burgerConstructor";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/hooks/hooks";
import { TIngredients } from "../../services/types/data";
import React from "react";
import { ILocation } from "../../app/app";

function BurgerConstructor() {
  const location = useLocation<ILocation>();
  const history = useHistory();
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {
    burgerConstructorIngredients: burgerIngredients,
    isModalOpen,
    orderRequest,
    burgerConstructorBuns: buns
  } = useSelector(state => state.burgerConstructorIngredients);

  const moveItem = (item: TIngredients) => {
    if (item.type === "bun" && buns.length > 0) {
      dispatch(decreaseIngredientCounter(buns[0]));
      const key = Math.random().toString(36).slice(2);
      dispatch(addIngredientAction(item, key));
      dispatch(increaseIngredientCounter(item));
    } else {
      const key = Math.random().toString(36).slice(2);
      dispatch(addIngredientAction(item, key));
      dispatch(increaseIngredientCounter(item));
    }
  };

  const [{ isHover }, dropTarget] = useDrop<
    TIngredients,
    void,
    { isHover: boolean }
>({
    accept: "items",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      moveItem(item);
    }
  });

  const onOrderClick = (e: React.SyntheticEvent<Element,Event>) => {
    e.preventDefault();
    if (Object.keys(user).length === 0) {
      return history.push({ pathname: "/login" }, { from: location });
    }
    const IngredientsForOrder = burgerIngredients.concat(buns);
    const IDs = { "ingredients": IngredientsForOrder.map(item => item._id) };
    dispatch(placeOrderThunk(IDs));
  };

  const onCloseBtnClick = () => {
    dispatch(closeOrderModalAction());
  };

  const isDisabled = Boolean(burgerIngredients.length === 0 || buns.length === 0);

  return (

    <>
      {orderRequest && (
        <>
          <Modal
            header="Is loading ..."
            onCloseBtnClick={onCloseBtnClick}
          >
          </Modal>
        </>
      )}
      {isModalOpen && !orderRequest && (
        <>
          <Modal
            onCloseBtnClick={onCloseBtnClick}
            header=""
          >
            <OrderDetails />
          </Modal>
        </>
      )}

      <section ref={dropTarget} className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
        <IngredientSection />
        <div className={styles.ingredients__shopping_cart}>
          <TotalBill />
          <Button onClick={onOrderClick} type="primary" size="large" disabled={isDisabled}>
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  );
};

export default BurgerConstructor;
