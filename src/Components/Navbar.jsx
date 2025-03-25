import { NavLink } from "react-router-dom";
import { useAuthentication } from "../Hooks/useAuthentication";
import { useAuthValue } from "../Context/AuthContext";
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from './Logo.svg';
import LoginModal from "./LoginModal";
import CadastroModal from "./CadastroModal";


const NavBar = () => {
    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);

    const handleOpenLoginModal = () => setIsLoginModalOpen(true);
    const handleCloseLoginModal = () => setIsLoginModalOpen(false);

    const handleOpenCadastroModal = () => setIsCadastroModalOpen(true);
    const handleCloseCadastroModal = () => setIsCadastroModalOpen(false);

    const openCadastro = () => {
        setIsCadastroModalOpen(true);
        setIsLoginModalOpen(false);
    };

    const openLogin = () => {
        setIsCadastroModalOpen(false);
        setIsLoginModalOpen(true);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={Logo} alt="Logo Innova Agrotech" />
                    </a>
                </div>
                <div className={styles.searchBar}>
                    <img src="/Lupa.svg" alt="ícone de pesquisa" className={styles.searchIcon} />
                    <input type="text" placeholder="Pesquisar produtos" />
                </div>
                <ul className={styles.navLinks}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Reviews">Reviews</NavLink></li>
                    <li><NavLink to="/SobreNos">Sobre nós</NavLink></li>
                    <li><NavLink to="/FaleConosco">Fale Conosco</NavLink></li>
                    {!user && (
                        <>
                            <li><NavLink onClick={handleOpenLoginModal} className={styles.btn}>Log in</NavLink></li>
                            <li><NavLink onClick={handleOpenCadastroModal} className={styles.btn}>Cadastro</NavLink></li>
                        </>
                    )}
                    {user && (
                        <li><NavLink onClick={logout} className={styles.exit}>Log out</NavLink></li>
                    )}
                </ul>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} openCadastro={openCadastro} />
            <CadastroModal isOpen={isCadastroModalOpen} onClose={handleCloseCadastroModal} openLogin={openLogin} />
        </>
    );
};

export default NavBar;
