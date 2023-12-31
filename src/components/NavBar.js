import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ onLoadUsers }) => {
  return (
    <nav className={styles.navBar}>
      <h2>User Details</h2>
      <button className={styles.button} onClick={onLoadUsers}>
        Load Users
      </button>
    </nav>
  );
};

export default NavBar;


