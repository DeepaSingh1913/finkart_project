"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container flex justify-between items-center">
          <div className={styles.contactInfo}>
            <span>24x7 Support: <a href="tel:7982288552" className={styles.phoneLink}>79822 88552</a></span>
          </div>
          <div className={styles.topLinks}>
            <Link href="/contact">Contact Now</Link>
            <Link href="/calculators">Calculators</Link>
          </div>
        </div>
      </div>
      
      <nav className={`${styles.nav} glass-panel`}>
        <div className={`container flex justify-between items-center ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Dhansampatti<span className={styles.logoHighlight}>Finance</span></span>
          </Link>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}></span>
          </button>
          
          <div className={`${styles.navContent} ${isMenuOpen ? styles.navContentOpen : ''}`}>
            <div className={styles.navLinks}>
              <Link href="#home-loans" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home Loans</Link>
              <Link href="#personal-loans" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Personal Loans</Link>
              <Link href="#business-loans" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Business Loans</Link>
              <Link href="#credit-cards" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Credit Cards</Link>
              <Link href="#insurance" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Insurance</Link>
            </div>
            
            <div className={styles.navActions}>
              <Link href="#eligibility" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Check Eligibility</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
