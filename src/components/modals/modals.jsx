import React from "react";
import ReactDOM from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modals.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
const modalsContainer = document.querySelector("#react-modals");

const Modal = () => {
  return ReactDOM.createPortal(
    <>
      <section className={styles.popup}>
        <div className={styles.popup__container}>
          <button type="button" className={styles.popup__close_btn}></button>
        </div>
      </section>
    </>,
    modalsContainer
  );
};

export default Modal;

/*
<>
                <div className="Modal">
                <ModalHeader onClose={onClose}>{header}</ModalHeader>
                    {children}
                </div>
                <ModalBackDrop onClose={onClose} />
                </>
                */
