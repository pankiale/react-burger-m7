import api from "../../api/api";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from "./total-bill";
import { useContext, useState } from "react";
import Modal from "../modals/modals";
import OrderDetails from "../modals/order-details/order-details";
import { BurgerIngredientsContext, TotalPriceContext } from "../../services/burgerConstructorContext";
import { useSelector } from "react-redux";

function BurgerConstructor() {

  const [totalPrice, setTotalPrice] = useState(0);
  const {ingredients}
    = useSelector(
    state => state.ingredients
    );
  const initialSetOfIngredients = function() {
    let n = 0;
    const newArray = [];
    ingredients.forEach(
      (item) => {
        if (item.type === "bun" && n < 1) {
          newArray.push(item);
          n += 1;
        }
        if (item.type === "bun" && n === 1) return;
        else {
          newArray.push(item);
        }
        ;
      }
    );
    return newArray;
  };

  const [burgerIngredients, setBurgerIngredients] = useState(initialSetOfIngredients);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);

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
        <BurgerIngredientsContext.Provider value={{ burgerIngredients, setBurgerIngredients }}>
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
          <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
            <IngredientSection />
            <div className={styles.ingredients__shopping_cart}>
              <TotalBill />
              <Button onClick={onOrderClick} type="primary" size="large">
                Оформить заказ
              </Button>
            </div>
          </section>
        </BurgerIngredientsContext.Provider>
      </TotalPriceContext.Provider>
    </>
  );
}

export default BurgerConstructor;
