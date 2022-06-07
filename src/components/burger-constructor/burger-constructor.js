import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
import TotalBill from './total-bill'

BurgerConstructor.propTypes = {
  handleClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
};

function BurgerConstructor(props) {

  const handleClick = () => {
    props.handleClick();
  }

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
