import React from 'react';
import styles from'./Navbar.module.css';
import Container from './Container'; // Importe o componente Container

function Navbar(){
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className ={styles.list}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
