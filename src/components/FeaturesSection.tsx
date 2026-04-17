import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const features = [
    {
      id: 'wealth',
      title: 'Wealth Protection',
      description: 'Secure your extensive portfolio with our bank-grade encrypted systems and ISO certified processes.',
      icon: '🛡️',
    },
    {
      id: 'growth',
      title: 'Rapid Growth',
      description: 'Experience the fastest approval turnaround in the industry. Your time is our most valued currency.',
      icon: '🚀',
    },
    {
      id: 'priority',
      title: '24/7 Priority',
      description: 'Dedicated relationship managers available round the clock to assist you with every financial move.',
      icon: '⭐',
    },
    {
      id: 'network',
      title: 'Expert Network',
      description: 'Access our exclusive network of 50+ premium financial institutions tailored to your needs.',
      icon: '🤝',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Redefining Financial Excellence</h2>
          <p className={styles.subtitle}>
            At Dhansampatti, we don&apos;t just offer loans; we build legacies. Our premium financial solutions are designed to elevate your wealth journey.
          </p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBanner}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Multiply Your Wealth?</h3>
            <p className={styles.ctaText}>
              Join India&apos;s most exclusive financial platform. Get tailored loan offers and investment advice today.
            </p>
          </div>
          <button className="btn btn-primary">Join Dhansampatti Now</button>
        </div>
      </div>
    </section>
  );
}
