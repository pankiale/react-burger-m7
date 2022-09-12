import styles from "./card.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { Link, useHistory, useLocation } from "react-router-dom";
import { TIngredients } from "../../services/types/data";

const Card = ({ data }: {data: TIngredients}) => {
  const history = useHistory()
  const location = useLocation();
  const [{ opacity }, ref] = useDrag({
    type: "items",
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });

  return (
    <Link to={{
      pathname: `/ingredients/${data._id}`,
      state: { background: location }
    }}
          ref={ref} className={styles.card} style={{ opacity }}>
      <img src={data.image} alt={data.name} className={styles.card__image} />
      {data.counter > 0 && (<div className={styles.card__counter}>
        <Counter count={data.counter} size="default" />
      </div>)}
      <p
        className={`${styles.card__price} text text_type_digits-default mt-1 mb-1`}
      >
        {data.price}
        <CurrencyIcon type="primary" />{" "}
      </p>
      <p className={`${styles.card__title} text text_type_main-default`}>
        {data.name}
      </p>
    </Link>
  );
};

export default Card;
