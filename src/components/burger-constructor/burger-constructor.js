import PropTypes from 'prop-types';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

function BurgerConstructor(props) {
  
  BurgerConstructor.propTypes = {
    props: PropTypes.arrayOf({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  };

  const TotalBill = ({total }) => {
    return (
        <div className={styles.ingredients__total}>
          <p className="text text_type_digits-medium">{total}</p>
          <CurrencyIcon type="primary" />
        </div>
  )};

  const IngredientList = ({filter, props }) => {
    return (
      <div className={`${styles.ingredients__item} pl-4`}>
        <div className="pr-3">
          <ConstructorElement
            type="top"
            text={`${props.data[0].name} (верх)`}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
            isLocked={true}
          />
        </div>

        <ul className={`${styles.ingredients__list} mt-4 mb-4 `}>
          {props.data
            .filter((item) => item.type === filter)
            .map((item) => {
              return (
                <li className={styles.ingredients__el} key={item._id}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    isLocked={false}
                  />
                </li>
              );
            })}
        </ul>
        <div className="pr-3">
          <ConstructorElement
            type="bottom"
            text={`${props.data[0].name} (низ)`}
            price={props.data[0].price}
            thumbnail={props.data[0].image}
            isLocked={true}
          />
        </div>
      </div>
    );
  };

  return (
    <section className={`${styles.ingredients__section} pl-5 pr-4 pt-25`}>
      <IngredientList filter="main" props={props} />
      <div className={styles.ingredients__shopping_cart}>
        <TotalBill total={650}/>
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
