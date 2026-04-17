"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container flex justify-between items-center">
          <div className={styles.trustInfo}>
            <span className={styles.isoIcon}>🛡️</span>
            <span>ISO 9001:2015 Certified</span>
            <span className={styles.divider}>|</span>
            <span>Trusted by 2 Lakh+ Families</span>
          </div>
          <div className={styles.topLinks}>
            <div className={styles.supportInfo}>
              <span className={styles.callIcon}>📞</span>
              <span>24x7 Support: <a href="tel:7982288552" className={styles.phoneLink}>79822 88552</a></span>
            </div>
          </div>
        </div>
      </div>
      
      <nav className={`${styles.nav} glass-panel`}>
        <div className={`container flex justify-between items-center ${styles.navInner}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>F</div>
            <div className={styles.logoTextWrapper}>
              <span className={styles.logoFinkart}>Finkart</span>
              <span className={styles.logoFinance}>Finance</span>
            </div>
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
              <div className={styles.dropdownContainer}>
                <button 
                  className={styles.navLink} 
                  onClick={() => setIsLoansOpen(!isLoansOpen)}
                >
                  Loans <span className={styles.dropdownArrow}>{isLoansOpen ? '▲' : '▼'}</span>
                </button>
                {isLoansOpen && (
                  <div className={styles.dropdownMenu}>
                    <Link href="#home-loans" className={styles.dropdownItem} onClick={() => { setIsLoansOpen(false); setIsMenuOpen(false); }}>Home Loans</Link>
                    <Link href="#personal-loans" className={styles.dropdownItem} onClick={() => { setIsLoansOpen(false); setIsMenuOpen(false); }}>Personal Loans</Link>
                    <Link href="#business-loans" className={styles.dropdownItem} onClick={() => { setIsLoansOpen(false); setIsMenuOpen(false); }}>Business Loans</Link>
                  </div>
                )}
              </div>
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
