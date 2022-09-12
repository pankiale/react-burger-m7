import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { TypedUseSelectorHook, useSelector as selectorHook} from "react-redux";
import { RootState } from "../../services/types";
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

const TotalBill = () => {

  const { totalPrice } = useSelector((state) => state.burgerConstructorIngredients);

  return (
    <div className={styles.ingredients__total}>
      <p className="text text_type_digits-medium">{totalPrice}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};

export default TotalBill;
