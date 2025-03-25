import React, { useState, useEffect } from 'react';
import styles from './Cadastro.module.css';
import { useAuthentication } from '../../Hooks/useAuthentication';

const Cadastro = ({ openLogin }) => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmedPassword) {
            setError('As senhas precisam ser iguais.');
            return;
        }

        const user = { displayName, email, password };
        await createUser(user);
    };

    useEffect(() => {
        if (authError) setError(authError);
    }, [authError]);

    return (
        <div className={styles.Cadastro}>
            <h1 className={styles.Tittle}>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">
                    <input
                        type="text"
                        name="displayName"
                        id="displayName"
                        required
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Nome de usuário"
                    />
                </label>
                <label htmlFor="email">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                    />
                </label>
                <label htmlFor="confirmedPassword">
                    <input
                        type="password"
                        name="confirmedPassword"
                        id="confirmedPassword"
                        required
                        value={confirmedPassword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        placeholder="Confirmação de senha"
                    />
                </label>
                {!loading && <button className={styles.cadastroButton}>Cadastrar</button>}
                {loading && <button className={styles.cadastroButton} disabled>Aguarde...</button>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <footer className={styles.footer}>
                Já tem uma conta? <span onClick={openLogin} className={styles.loginLink}>Faça login</span>
            </footer>
        </div>
    );
};

export default Cadastro;