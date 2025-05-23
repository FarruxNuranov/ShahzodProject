// src/components/Navbar/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import logo from '@/assets/log.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
      <div className={styles.nav__box}>
          <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logomark" className={styles.logo} />
        </Link>

        <Link to="/login" className={styles.login}>
          Client Login
        </Link>
      </div>
      </div>
    </nav>
  )
}
