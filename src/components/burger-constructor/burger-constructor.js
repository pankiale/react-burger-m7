import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

function BurgerConstructor(props) {
  props.data[0];

  /*const TotalBill = ({filter, props }) => {
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
        </div>
  )};*/

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
      <Button type="primary" size="large">
        Оформить заказ
      </Button>
    </section>
  );
}

export default BurgerConstructor;
