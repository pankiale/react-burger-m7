import PropTypes from "prop-types";
import { dataTypes } from "../../../utils/const";
import styles from "./ingredient_details.module.css";

const IngredientDetails = ({ data }) => {
  return (
    <section className={styles.ingr__card}>
      <img
        src={data.data.image_large}
        alt={data.data.name}
        className={styles.ingr__image}
      />
      <p className={`${styles.ingr__title} text text_type_main-medium`}>
        {data.data.name}
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
            {data.data.calories}
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
            {data.data.proteins}
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
            {data.data.fat}
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
            {data.data.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
};


IngredientDetails.propTypes = {
  data: PropTypes.objectOf(dataTypes).isRequired,
};

export default IngredientDetails;
