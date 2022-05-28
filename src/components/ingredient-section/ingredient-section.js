import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-section.module.css";

  const IngredientSection = ({ filter, props}) => {

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
            .map((item, index) => {
              return (
                <li className={styles.ingredients__el} key={index}>
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

  IngredientSection.propTypes = {
    filter: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(dataTypes.isRequired).isRequired,
  };

export default IngredientSection;
