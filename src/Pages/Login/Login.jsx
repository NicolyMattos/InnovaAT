import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { useAuthentication } from '../../Hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';

const Login = ({ openCadastro }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, error: authError, loading } = useAuthentication();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const user = { email, password };
        const res = await login(user);
        if (res) navigate("/post/create");
    };

    useEffect(() => {
        if (authError) setError(authError);
    }, [authError]);

    return (
        <div className={styles.Login}>
            <h1 className={styles.Tittle}>Login</h1>
            <form onSubmit={handleSubmit}>
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
                {!loading && <button className={styles.loginButton}>Logar</button>}
                {loading && <button className={styles.loginButton} disabled>Aguarde...</button>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <footer className={styles.footer}>
                Não tem uma conta? <span onClick={openCadastro} className={styles.cadastroLink}>Faça um cadastro</span>
            </footer>
        </div>
    );
};

export default Login;