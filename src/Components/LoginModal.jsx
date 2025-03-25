import React from "react";
import styles from './LoginModal.module.css';
import Login from "../Pages/Login/Login";

const LoginModal = ({ isOpen, onClose, openCadastro }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.className.includes("modalOverlay")) {
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent}>
                <button className={styles.CloseButton} onClick={onClose}>
                    &times;
                </button>
                <Login openCadastro={openCadastro} />
            </div>
        </div>
    );
};

export default LoginModal;