import React from 'react';
import styles from './CadastroModal.module.css';
import { useState, useEffect } from "react";
import { useAuthentication } from "../Hooks/useAuthentication";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";




const CadastroModal = ({ isOpen, onClose, openLogin}) => {
    if(!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target.className.includes("modalOverlay")) {
            onClose();
        }
    }
    const [displayName, setDisplayName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error,setError] = useState('');

    const { createUser, error:authError, loading } = useAuthentication();
    

    const handlerSubmit = async(e) =>{
        e.preventDefault();
        setError('');
        const user = {
            displayName,
            email,
            password
        };

        if (password !== confirmedPassword) {
            setError('As senhas precisam ser iguais.')
            return
        }

        const res = await createUser(user);

            console.table(res);

        
    };

    useEffect(() =>{
        if(authError){
            setError(authError);
        };
    }, [authError]);

    if (!isOpen) return null;

    return (
        <>
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.CloseButton} onClick={onClose}>
                    &times;
                </button>
                    <h1>
                        Cadastro
                    </h1>
                <form onSubmit={handlerSubmit}>
                    <label>
                        <input
                        type="text"
                        name="displayName"
                        required 
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder='Nome de usuário'
                        ></input>
                    </label>
                    <label>
                        <input
                        type='email'
                        name='email'
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='E-mail'
                        ></input>
                    </label>
                    <label>
                        <input
                        type='password'
                        name='password'
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Senha'
                        ></input>
                    </label>
                    <label>
                        <input
                        type="password"
                        name="confirmedPassword"
                        required 
                        value={confirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        placeholder="Confirmação de senha"
                        ></input>
                    </label>
                    <button className={styles.btn} disabled={loading}>
                        {loading ? 'Aguarde...' : 'Cadastrar'}
                    </button>
                        {error && <p className='error'>{error}</p>}
                </form>
                <footer>
                    <p> Já tem uma conta? Faça <Link onClick={openLogin}>login</Link></p>
                </footer>
            </div>
        </div>
        </>
    )
}

export default CadastroModal;