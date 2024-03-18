import React from 'react';
import styles from'./Footer.module.css';


const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footer}>&copy; 2024 My Website</p>
    </footer>
  );
}

export default Footer;
