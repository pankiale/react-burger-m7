import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_INGREDIENT, MOVE_ELEMENT } from "../../services/actions/burgerConstructor";
import { DECREASE_COUNTER } from "../../services/actions/ingredients";
import styles from "./ingredient-section.module.css";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

const Element = ({ item, index, id }) => {

  const ref = useRef(null);
  const dispatch = useDispatch();

  //сортировка ингредиентов внутри конструктора
  const [, drop] = useDrop({
    accept: "item",
    hover(element) {
      if (!ref.current) {
        return;
      }
      const dragIndex = element.index;
      const hoverIndex = index;
      dispatch({
        type: MOVE_ELEMENT,
        data: { dragIndex, hoverIndex },
      });
      element.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: "item",
    item: { id, index },
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  drag(drop(ref));

 console.log(id)

  return (
    <li index={index} ref={ref} id={id} className={styles.ingredients__el}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item?.name}
        price={item?.price}
        thumbnail={item?.image}
        isLocked={false}
        handleClose={() => {
          dispatch({
            type: DELETE_INGREDIENT,
            item
          });
          dispatch({
            type: DECREASE_COUNTER,
            item
          });
        }}
      />
    </li>);
};

export default Element;