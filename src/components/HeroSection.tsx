import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in`}>
            Empowering Your <br/>
            <span className={styles.highlight}>Wealth Journey</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in`}>
            Experience hassle-free loans with lowest interest rates. We combine technology with financial expertise to deliver your dreams.
          </p>
          
          <div className={`${styles.actions} animate-fade-in`}>
            <Link href="#eligibility" className="btn btn-primary">
              Check Eligibility
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk to Expert
            </Link>
          </div>

          <div className={`${styles.stats} animate-fade-in`}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>30+</div>
              <div className={styles.statLabel}>Partner Banks</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>Fastest</div>
              <div className={styles.statLabel}>Disbursal Guarantee</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>Lowest</div>
              <div className={styles.statLabel}>Interest Rates</div>
            </div>
          </div>
        </div>
        
        <div className={`${styles.imageContainer} animate-fade-in`}>
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>Loan Approval</div>
              <div className={styles.cardStatus}>Approved</div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.amountLabel}>Approved Amount</div>
              <div className={styles.amountValue}>₹ 50,00,000</div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <div>Interest Rate: <strong>8.5% p.a.</strong></div>
              <div>Tenure: <strong>20 Years</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
