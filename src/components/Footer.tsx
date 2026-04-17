import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Dhansampatti<span className={styles.logoHighlight}>Finance</span></span>
          </Link>
          <p className={styles.description}>
            Your trusted partner in wealth creation. We provide premium financial solutions, from exclusive home loans to investment planning, tailored for the ambitious Indian family.
          </p>
        </div>

        <div className={styles.footerNav}>
          <h4 className={styles.footerTitle}>Solutions</h4>
          <ul className={styles.footerList}>
            <li><Link href="#home-loans">Home Loans</Link></li>
            <li><Link href="#property-loans">Property Loans</Link></li>
            <li><Link href="#business-finance">Business Finance</Link></li>
            <li><Link href="#wealth-management">Wealth Management</Link></li>
            <li><Link href="#insurance">Insurance</Link></li>
          </ul>
        </div>

        <div className={styles.footerNav}>
          <h4 className={styles.footerTitle}>Company</h4>
          <ul className={styles.footerList}>
            <li><Link href="#about">About Dhansampatti</Link></li>
            <li><Link href="#leadership">Leadership Team</Link></li>
            <li><Link href="#careers">Careers</Link></li>
            <li><Link href="#investors">Investor Relations</Link></li>
            <li><Link href="#press">Press & Media</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerTitle}>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Email Support</span>
              <a href="mailto:care@dhansampatti.com">care@dhansampatti.com</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Call Us</span>
              <a href="tel:7982288552">79822 88552</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Headquarters</span>
              <p>504/3A/4, GALI NO.- 10, PANDEV ROAD, VISHWAS NAGAR, East Delhi, 110032</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={`container flex justify-between items-center ${styles.footerBottomInner}`}>
          <p>&copy; {new Date().getFullYear()} Dhansampatti Finance. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
