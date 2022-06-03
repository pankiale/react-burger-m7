import React from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { dataTypes } from "../../utils/const";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modals.module.css";
import IngredientSection from "../ingredient-section/ingredient-section";
const modalsContainer = document.querySelector("#react-modals");

const Modal = ({header, children, handleCloseClick}) => {

const closePopup = () => {
  handleCloseClick()
}

  return ReactDOM.createPortal(
    <>
      <section className={styles.popup__container}>
          <button onClick={closePopup} type="button" className={styles.popup__close_btn}><div><CloseIcon /></div></button>
          <h1 className='text text_type_main-default' >{header}</h1>
          {children}
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
