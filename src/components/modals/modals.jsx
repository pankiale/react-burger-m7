import {useEffect} from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modals.module.css";
const modalsContainer = document.querySelector("#react-modals");

const Modal = ({ header, children, handleCloseClick, onEscKeydown }) => {

  const closePopup = () => {
    handleCloseClick();
  };

  useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);
    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <section className={styles.popup__container}>
        <button
          onClick={closePopup}
          type="button"
          className={styles.popup__close_btn}
        >
          <CloseIcon />
        </button>
        <h1 className={`${styles.popup__header} text text_type_main-large`}>
          {header}
        </h1>
        {children}
      </section>
    </>,
    modalsContainer
  );
};

export default Modal;
