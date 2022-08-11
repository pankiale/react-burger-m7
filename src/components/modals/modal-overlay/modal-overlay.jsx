import PropTypes from "prop-types";
import styles from "../modals.module.css";

const ModalOverlay = ({ handleCloseClick }) => {
  const closePopup = (e) => {
    handleCloseClick(e);
  };

  return (
    <>
      <div onClick={closePopup} className={styles.popup}></div>
    </>
  );
};

ModalOverlay.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
