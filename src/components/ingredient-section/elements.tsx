import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredientAction, moveElementAction } from "../../services/actions/burgerConstructor";
import { decreaseIngredientCounter } from "../../services/actions/ingredients";
import styles from "./ingredient-section.module.css";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TItem } from "../../services/types/data";
import { useDispatch } from "../../services/hooks/hooks";

interface DragItem {
  index: number
  id: string
  type: string
}

const Element = ({ item, index, id }: {item: TItem, index: number, id: string}) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  //сортировка ингредиентов внутри конструктора
  const [, drop] = useDrop({
    accept: "item",
    hover(element:DragItem) {
      if (!ref.current) {
        return;
      }
      const dragIndex = element.index;
      const hoverIndex = index;
      dispatch(moveElementAction(dragIndex, hoverIndex));
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

  return (
    <li ref={ref} id={id} className={styles.ingredients__el}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item?.name}
        price={item?.price}
        thumbnail={item?.image}
        isLocked={false}
        handleClose={() => {
          dispatch(deleteIngredientAction(item));
          dispatch(decreaseIngredientCounter(item));
        }}
      />
    </li>);
};

export default Element;