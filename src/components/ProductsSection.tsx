import Link from 'next/link';
import styles from './ProductsSection.module.css';

export default function ProductsSection() {
  const products = [
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      description: 'Quick approval for your immediate financial needs with minimal documentation.',
      icon: '💸',
      link: '#',
      highlight: 'Instant Approval',
    },
    {
      id: 'home-loan',
      title: 'House Loan',
      description: 'Build your dream home with our competitive interest rates and long tenure options.',
      icon: '🏠',
      link: '#',
    },
    {
      id: 'lap',
      title: 'Loans against Properties',
      description: 'Unlock the value of your property to fund your business or personal needs.',
      icon: '🏢',
      link: '#',
      highlight: 'Lowest Rates',
    },
    {
      id: 'balance-transfer',
      title: 'Home Loan Balance Transfer',
      description: 'Switch your existing home loan to us and save significantly on interest.',
      icon: '🔄',
      link: '#',
      highlight: 'Save Lakhs',
    },
    {
      id: 'business-loan',
      title: 'Business Loan',
      description: 'Fuel your business growth with our customized, collateral-free business loans.',
      icon: '📈',
      link: '#',
    },
    {
      id: 'gold-loan',
      title: 'Gold Loan',
      description: 'Get instant cash against your gold jewelry with highest per gram value.',
      icon: '✨',
      link: '#',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--card-bg)' }} id="products">
      <div className="container">
        <h2 className="section-title">Our Exclusive Financial Products</h2>
        <p className="text-center" style={{ marginBottom: '4rem', color: 'var(--text-muted)' }}>
          Discover tailor-made financial solutions designed to meet your specific needs.
        </p>
        
        <div className={styles.grid}>
          {products.map((product) => (
            <Link href={product.link} key={product.id} className={styles.card}>
              {product.highlight && (
                <span className={styles.badge}>{product.highlight}</span>
              )}
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{product.icon}</span>
              </div>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.action}>
                Apply Now <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
