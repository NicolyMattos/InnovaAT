import { NavLink } from "react-router-dom";
import { useAuthentication } from "../Hooks/useAuthentication";
import { useAuthValue } from "../Context/AuthContext";
import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo.svg';


const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  console.log(user);
  return (
    <>
    <nav className={styles.navbar}>
    <div className={styles.logo}>
      <a href="/"> 
      <img src={Logo} alt="Logo Innova Agrotech" /> 
      <span>INNOVA AGROTECH</span>
      </a>
    </div>
    <div className={styles.searchBar}>
      <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
      <input type="text" placeholder="Pesquisar produtos" />
    </div>
    <ul className={styles.navLinks}>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/produtos">Produtos</NavLink></li>
      <li><NavLink to="/sobre-nos">Sobre nós</NavLink></li>
      <li><NavLink to="/fale-conosco">Fale Conosco</NavLink></li>
      <li><NavLink to="/login">Log in</NavLink></li>
    </ul>
  </nav>
  </>
  );
};

export default Navbar;