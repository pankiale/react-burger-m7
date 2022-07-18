import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useSelector } from "react-redux";

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
