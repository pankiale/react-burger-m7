import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from "./total-bill";
import Modal from "../modals/modals";
import OrderDetails from "../modals/order-details/order-details";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { DECREASE_COUNTER, INCREASE_COUNTER } from "../../services/actions/ingredients";
import {
  ADD_INGREDIENT,
  placeOrder,
  CLOSE_ORDER_MODAL
} from "../../services/actions/burgerConstructor";
import { Redirect, useHistory, useLocation } from "react-router-dom";

function BurgerConstructor() {
  const location = useLocation();
  const history = useHistory();
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {
    burgerConstructorIngredients: burgerIngredients,
    isModalOpen,
    orderRequest,
    burgerConstructorBuns: buns
  } = useSelector(state => state.burgerConstructorIngredients);

  const moveItem = (item) => {
    if (item.type === "bun" && buns.length > 0) {
      dispatch({
        type: DECREASE_COUNTER,
        item: buns[0]
      });
      const key = Math.random().toString(36).slice(2);
      dispatch({
        type: ADD_INGREDIENT,
        item: { ...item, key: key }
      });
      dispatch({
        type: INCREASE_COUNTER,
        item: item
      });
    } else {
      const key = Math.random().toString(36).slice(2);
      dispatch({
        type: ADD_INGREDIENT,
        item: { ...item, key: key }
      });
      dispatch({
        type: INCREASE_COUNTER,
        item: item
      });
    }
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "items",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      moveItem(item);
    }
  });

  const onOrderClick = (e) => {
    e.preventDefault();
    if (Object.keys(user).length === 0) {
      return history.push({ pathname: "/login" }, { from: location });
    }
    const IngredientsForOrder = burgerIngredients.concat(buns);
    const IDs = { "ingredients": IngredientsForOrder.map(item => item._id) };
    dispatch(placeOrder(IDs));
  };

  const onCloseBtnClick = () => {
    dispatch({
      type: CLOSE_ORDER_MODAL
    });
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
