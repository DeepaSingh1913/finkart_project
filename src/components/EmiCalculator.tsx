"use client";

import { useState, useEffect } from 'react';
import styles from './EmiCalculator.module.css';

export default function EmiCalculator() {
  const [amount, setAmount] = useState(2500000);
  const [tenure, setTenure] = useState(10);
  const [interest, setInterest] = useState(8.5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const p = amount;
    const r = interest / 12 / 100;
    const n = tenure * 12;
    
    if (p > 0 && r > 0 && n > 0) {
      const emiCalc = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(Math.round(emiCalc));
      setTotalInterest(Math.round((emiCalc * n) - p));
    } else {
      setEmi(0);
      setTotalInterest(0);
    }
  }, [amount, tenure, interest]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="section" id="calculator">
      <div className="container">
        <h2 className="section-title">EMI Calculator</h2>
        <p className="text-center" style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>
          Plan your loan repayment with our easy-to-use calculator.
        </p>
        
        <div className={styles.calculatorWrapper}>
          <div className={`${styles.slidersPanel} glass-panel`}>
            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label>Loan Amount</label>
                <span className={styles.valueDisplay}>{formatCurrency(amount)}</span>
              </div>
              <input 
                type="range" 
                min="100000" 
                max="10000000" 
                step="100000"
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.rangeLabels}>
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label>Tenure (Years)</label>
                <span className={styles.valueDisplay}>{tenure} Years</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={tenure} 
                onChange={(e) => setTenure(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.rangeLabels}>
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label>Interest Rate (% p.a.)</label>
                <span className={styles.valueDisplay}>{interest}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="20" 
                step="0.1"
                value={interest} 
                onChange={(e) => setInterest(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.rangeLabels}>
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>
          </div>

          <div className={styles.resultPanel}>
            <div className={styles.resultCard}>
              <h3 className={styles.resultTitle}>Your Monthly EMI</h3>
              <div className={styles.emiAmount}>{formatCurrency(emi)}</div>
              
              <div className={styles.breakdown}>
                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownLabel}>Principal Amount</div>
                  <div className={styles.breakdownValue}>{formatCurrency(amount)}</div>
                </div>
                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownLabel}>Total Interest</div>
                  <div className={styles.breakdownValue}>{formatCurrency(totalInterest)}</div>
                </div>
                <div className={styles.breakdownItem}>
                  <div className={styles.breakdownLabel}>Total Amount Payable</div>
                  <div className={styles.breakdownValue}>{formatCurrency(amount + totalInterest)}</div>
                </div>
              </div>
              
              <button className={`btn btn-primary ${styles.applyBtn}`}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
