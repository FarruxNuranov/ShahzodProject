// src/components/Navbar/Navbar.jsx
import React from 'react'
import styles from './Navbar.module.scss'
import logo from '@/assets/log.png'

export default function Navbar() {
  const handleScroll = (sectionId) => (e) => {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.nav__box}>
          {/* Логотип */}
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="Company Logo" className={styles.logo} />
          </a>

          {/* Меню */}
          <ul className={styles.navLinks}>
            <li>
              <a
                href="https://abstract-it.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleScroll('about')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={handleScroll('services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleScroll('contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
