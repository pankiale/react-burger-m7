import styles from "../modals.module.css";
import React, { FC } from "react";

interface IModalOverlayProps {
  handleCloseClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | KeyboardEvent) => void
}

const ModalOverlay: FC<IModalOverlayProps> = ({ handleCloseClick }) => {
  const closePopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleCloseClick(e);
  };

  return (
    <>
      <div onClick={closePopup} className={styles.popup}></div>
    </>
  );
};

export default ModalOverlay;
