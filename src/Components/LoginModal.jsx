import React from "react";
import styles from './LoginModal.module.css';
import { useState, useEffect } from "react";
import { useAuthentication } from "../Hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
import CadastroModal from "./CadastroModal";
import { Link } from "react-router-dom";



const LoginModal = ({ isOpen, onClose, openCadastro}) => {
    if(!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.className.includes("modalOverlay")) {
            onClose();
        }
    }

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const { login, error:authError, loading } = useAuthentication();
    const navigate = useNavigate();

    const handlerSubmit = async(e) =>{
        e.preventDefault();
        setError('');
        const user = {
            email,
            password
        };

        const res = await login(user);

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
                        Login
                    </h1>
                <form onSubmit={handlerSubmit}>
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
                    <button className={styles.btn} disabled={loading}>
                        {loading ? 'Aguarde...' : 'Logar'}
                    </button>
                        {error && <p className='error'>{error}</p>}
                </form>
                <footer>
                <p> Não tem uma conta? Faça um <Link onClick={openCadastro}>cadastro</Link></p>
                </footer>
            </div>
        </div>
        </>
    )
}

export default LoginModal;