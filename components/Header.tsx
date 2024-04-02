// components/Header.tsx

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
