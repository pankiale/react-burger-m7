import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";

BurgerConstructor.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
};

function BurgerConstructor(props) {

  const handleClick = () => {
    props.handleClick();
  }

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

  return (
    <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
      <IngredientSection filter="main" data={props} />
      <div className={styles.ingredients__shopping_cart}>
        <TotalBill total={650} />
        <Button onClick={handleClick} type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
