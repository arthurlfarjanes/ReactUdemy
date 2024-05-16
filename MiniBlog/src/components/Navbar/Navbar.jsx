// CSS
import styles from './Navbar.module.css'

// React
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../context/AuthContext'

function Navbar() {

  const {user} = useAuthValue()
  const {logout} = useAuthentication()

  console.log(user)

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini<span>Blog</span>
      </NavLink>
      <ul className={styles.linksList}>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        
        {user ? 
          <>
            <li>
                <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to="/cadastro" className={({ isActive }) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
            </li>
          </> 
          : 
          <>
            <li>
                <NavLink to="/post/create" className={({ isActive }) => (isActive ? styles.active : '')}>Novo Post</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink>
            </li>
          </>
          }

        <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>

        {!user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
