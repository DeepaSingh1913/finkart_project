import Link from 'next/link';
import styles from './EligibilitySection.module.css';

export default function EligibilitySection() {
  return (
    <section className="section" id="eligibility">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Check Your Eligibility in Minutes
          </h2>
          <p className={styles.description}>
            Don&apos;t let manual paperwork slow you down. Our digital-first approach ensures you get the fastest loan approvals with minimal documentation.
          </p>
          
          <ul className={styles.benefitsList}>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Instant approval from 30+ Banks
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              No impact on Credit Score
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Fastest Disbursal Guarantee
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Expert guidance throughout the process
            </li>
          </ul>
        </div>
        
        <div className={styles.formContainer}>
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            <h3 className={styles.formTitle}>Check Your Eligibility</h3>
            <p className={styles.formSubtitle}>Get instant approval details from multiple banks.</p>
            
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Employment Type</label>
                <select className={styles.input}>
                  <option>Salaried</option>
                  <option>Self Employed Business</option>
                  <option>Self Employed Professional</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Monthly Income (₹)</label>
                <input type="number" placeholder="e.g. 50000" className={styles.input} />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Mobile Number</label>
                <div className={styles.phoneInput}>
                  <span className={styles.countryCode}>+91</span>
                  <input type="tel" placeholder="99999 99999" className={`${styles.input} ${styles.inputPhone}`} />
                </div>
              </div>
              
              <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>
                Proceed
              </button>
              
              <p className={styles.termsText}>
                By clicking, you agree to our Terms and Conditions and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
