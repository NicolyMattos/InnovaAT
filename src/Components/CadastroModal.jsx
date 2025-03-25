import React from "react";
import styles from './CadastroModal.module.css';
import Cadastro from "../Pages/Cadastro/Cadastro";

const CadastroModal = ({ isOpen, onClose, openLogin }) => {
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
                <Cadastro openLogin={openLogin} />
            </div>
        </div>
    );
};

export default CadastroModal;