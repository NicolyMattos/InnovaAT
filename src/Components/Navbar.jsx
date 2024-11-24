import { NavLink } from "react-router-dom";
import { useAuthentication } from "../Hooks/useAuthentication";
import { useAuthValue } from "../Context/AuthContext";
import React from 'react';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo.svg';


const NavBar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();
  console.log(user);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/"> 
            <img src={Logo} alt="Logo Innova Agrotech" /> 
            <span>
              INNOVA AGROTECH
            </span>
          </a>
        </div>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input type="text" placeholder="Pesquisar produtos" />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reviews">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/SobreNos">
              Sobre nós
            </NavLink>
          </li>
          <li>
            <NavLink to="/FaleConosco">
              Fale Conosco
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/Login">
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cadastro">
                  Cadastro
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <button onClick={logout} className={styles.exit}>
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;