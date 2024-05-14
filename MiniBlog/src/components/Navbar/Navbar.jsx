// CSS
import styles from './Navbar.module.css'

// React
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.linksList}>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink>
        </li>
        <li>
            <NavLink to="/cadastro" className={({ isActive }) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
