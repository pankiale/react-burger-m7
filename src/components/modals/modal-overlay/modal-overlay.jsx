import PropTypes from "prop-types";
import { dataTypes } from "../../../utils/const";
import styles from "../modals.module.css";

const ModalOverlay = ({handleCloseClick}) => {

const closePopup = () => {
  handleCloseClick()
}

  return (
    <>
      <div onClick={closePopup} className={styles.popup}>
      </div>
</>)
};

ModalOverlay.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
