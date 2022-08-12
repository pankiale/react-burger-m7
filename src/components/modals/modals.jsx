import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modals.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { useDispatch } from "react-redux";
import { CLOSE_ORDER_MODAL } from "../../services/actions/burgerConstructor";
import { CLOSE_MODAL } from "../../services/actions/ingredients";
import { useHistory } from "react-router-dom";
const modalsContainer = document.querySelector("#react-modals");

const Modal = ({ header, children, onCloseBtnClick }) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const closePopup = (e) => {
    onCloseBtnClick(e);
  };

  const handleEscKeydown = (e) => {
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
          <CloseIcon />
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

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.object,
  handleCloseClick: PropTypes.func.isRequired
};

export default Modal;
