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
  DELETE_INGREDIENT,
  placeOrder,
  TOGGLE_ORDER_MODAL
} from "../../services/actions/burgerConstructor";

function BurgerConstructor() {

  const dispatch = useDispatch();
  const burgerIngredients = useSelector(state => state.burgerConstructorIngredients.burgerConstructorIngredients);
  const { isModalOpen } = useSelector(state => state.burgerConstructorIngredients);

  const moveItem = (item) => {
    if (item.type === "bun" && burgerIngredients.findIndex(item => item.type === "bun") !== -1) {
      dispatch({
        type: DELETE_INGREDIENT,
        item: burgerIngredients.find(item => item.type === "bun")
      });
      dispatch({
        type: DECREASE_COUNTER,
        item: burgerIngredients.find(item => item.type === "bun")
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
    ;
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

  const onOrderClick = () => {
    const IDs = { "ingredients": burgerIngredients.map(item => item._id) };
    dispatch(placeOrder(IDs));
  };

  const onCloseBtnClick = () => {
    dispatch({
      type: TOGGLE_ORDER_MODAL
    });
  };

  const handleEscKeydown = (e) => {
    e.key === "Escape" && onCloseBtnClick();
  };

  return (
    <>
      {isModalOpen && (
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
      <section ref={dropTarget} className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
        <IngredientSection />
        <div className={styles.ingredients__shopping_cart}>
          <TotalBill />
          <Button onClick={onOrderClick} type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  );
};

export default BurgerConstructor;
