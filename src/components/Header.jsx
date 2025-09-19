import React from 'react';
import styles from "../styles/header.module.css";
import Container from './Container';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <span>E-Store<b style={{color: "#000"}}>.</b></span>
        </div>
        <div className={styles.searchBar}>
          <input type='text' placeholder='Search for products...' className={styles.searchInput} />
          <button className={styles.searchButton}>
            <FiSearch size={18} />
          </button>
        </div>
        <NavBar />
      </Container>
    </header>
  );
}

const NavBar = () => (
  <nav className={styles.navBar}>
    <ul className={styles.navLinks}>
      <li className={styles.navLink}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navLink}>
        <Link href="/store">Store</Link>
      </li>
    </ul>
    <div className={styles.cartIcon}>
      <Link href="/cart">
        <div style={{ position: 'relative' }}>
          <FiShoppingCart size={24} />
          <span className={styles.cartBadge}>3</span>
        </div>
      </Link>
    </div>
  </nav>
);
