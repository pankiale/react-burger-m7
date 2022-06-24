import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { useContext } from "react";
import { TotalPriceContext } from "../../services/totalPriceContext";

  const TotalBill = () => {

    const {totalPrice} = useContext(TotalPriceContext);

    return (
      <div className={styles.ingredients__total}>
        <p className="text text_type_digits-medium">{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
    );
  };

export default TotalBill;
