import styles from './Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Logo from './Logo.svg'
import { NavLink } from "react-router-dom"
import { useAuthentication } from "../Hooks/useAuthentication"
import { useAuthValue } from "../Context/AuthContext"

const Navbar = () => {
  const { logout } = useAuthentication()
  const { user } = useAuthValue
  console.log(user)
  return (
    <nav className={styles.navbar}>
    <div className="logo">
      <a href="/"> <img src={Logo} alt="Logo Innova Agrotech" /> </a>
      {/*<span>INNOVA AGROTECH</span>*/}
    </div>
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="text" placeholder="Pesquisar produtos" />
    </div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/produtos">Produtos</a></li>
      <li><a href="/sobre-nos">Sobre nós</a></li>
      <li><a href="/fale-conosco">Fale Conosco</a></li>
      <li><a href="/login">Log in</a></li>
    </ul>
  </nav>
  )
}

export default Navbar