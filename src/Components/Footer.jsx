import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
        <li>
        <img src='/LogoFooter.svg' alt='Logo do footer' className={styles.Logo} />
          </li>
          <li>
          <h1>Contato</h1><p>XX XXXXX-XXX</p><p>XX XXXXX-XXX</p>
          </li>
          <li>
          <h1>E-mail</h1><p>XX XXXXX-XXX</p><p>XX XXXXX-XXX</p>
          </li>
          <li>
          <h1>Sobre</h1><p>XX XXXXX-XXX</p><p>XX XXXXX-XXX</p>
          </li>
          <li>
          <h1>Departamentos</h1><p>XX XXXXX-XXX</p><p>XX XXXXX-XXX</p>
          </li>
        </ul>
      </div>
    </footer>
    </>
  )
}

export default Footer