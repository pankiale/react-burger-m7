import React, { FC, useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modals.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";

const modalsContainer: Element = document.querySelector("#react-modals") as Element;

interface IModalProps {
  header: string,
  onCloseBtnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent> |KeyboardEvent) => void
}

const Modal: FC<IModalProps> = ({ header, children, onCloseBtnClick }) => {

  const closePopup = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onCloseBtnClick(e);
  };

  const handleEscKeydown = (e: KeyboardEvent) => {
    e.key === "Escape" && onCloseBtnClick(e);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
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
          <CloseIcon type={"primary"} />
        </button>
        <h1 className={`${styles.popup__header} text text_type_main-large`}>
          {header}
        </h1>
        {children}
      </section>
      <ModalOverlay handleCloseClick={onCloseBtnClick} />
    </>,
    modalsContainer
  );
};

export default Modal;
