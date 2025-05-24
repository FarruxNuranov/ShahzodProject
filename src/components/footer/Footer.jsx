// src/components/Footer/Footer.jsx
import React from 'react'
import styles from './Footer.module.scss'

import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { logo } from '../../utils/getImg'

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        <div className={styles.footerInner}>
          {/* Логотип и описание */}
          <div className={styles.col}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <p className={styles.desc}>
              Creating immersive digital experiences that resonate with audiences worldwide.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Контакты */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <p>1234 Elm Street, Springfield, USA</p>
            <p><a href="mailto:info@company.com">info@company.com</a></p>
            <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>

          {/* Социальные сети */}
          <div className={styles.col}>
            <h4>Follow Us</h4>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
