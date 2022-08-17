import PropTypes from "prop-types";
import { dataTypes } from "../../../utils/const";
import styles from "./ingredient_details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IngredientDetails = () => {
  const { ingredientId } = useParams();
  const { ingredients }
    = useSelector(
    state => state.ingredients
  );
  const data = ingredients.find(item => item._id === ingredientId);
  return (
    <section className={styles.ingr__card}>
      <img
        src={data?.image_large}
        alt={data?.name}
        className={styles.ingr__image}
      />
      <p className={`${styles.ingr__title} text text_type_main-medium`}>
        {data?.name}
      </p>
      <div className={styles.ingr__info_section}>
        <div className={styles.ingr__info_el}>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive`}
          >
            Калории, ккал
          </p>
          <p
            className={`${styles.popup__price} text text_type_digits-default text_color_inactive`}
          >
            {data?.calories}
          </p>
        </div>
        <div className={styles.ingr__info_el}>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive`}
          >
            Белки, г
          </p>
          <p
            className={`${styles.popup__price} text text_type_digits-default text_color_inactive`}
          >
            {data?.proteins}
          </p>
        </div>
        <div className={styles.ingr__info_el}>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive`}
          >
            Жиры, г
          </p>
          <p
            className={`${styles.popup__price} text text_type_digits-default text_color_inactive`}
          >
            {data?.fat}
          </p>
        </div>
        <div className={styles.ingr__info_el}>
          <p
            className={`${styles.popup__price} text text_type_main-default text_color_inactive`}
          >
            Углеводы, г
          </p>
          <p
            className={`${styles.popup__price} text text_type_digits-default text_color_inactive`}
          >
            {data?.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IngredientDetails;
