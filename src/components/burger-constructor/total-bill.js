import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

  const TotalBill = ({ total }) => {
    return (
      <div className={styles.ingredients__total}>
        <p className="text text_type_digits-medium">{total}</p>
        <CurrencyIcon type="primary" />
      </div>
    );
  };

  TotalBill.propTypes = {
    total: PropTypes.number.isRequired,
  };

export default TotalBill;
