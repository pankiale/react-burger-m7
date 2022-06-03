
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

export default ModalOverlay;
