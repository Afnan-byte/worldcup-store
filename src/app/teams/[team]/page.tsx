import styles from './page.module.css';
import ProductCard from '@/components/ui/ProductCard';

export default async function TeamCollection({ params }: { params: { team: string } }) {
  const resolvedParams = await params;
  const teamName = resolvedParams.team;

  // Dummy products
  const products = [
    { id: '1', name: `${teamName} Home Jersey`, price: 130.00, image: '/jersey.png', team: teamName, category: 'Jerseys' },
    { id: '2', name: `${teamName} Away Jersey`, price: 110.00, image: '/jersey.png', team: teamName, category: 'Jerseys' },
    { id: '3', name: `${teamName} Training Top`, price: 85.00, image: '/jersey.png', team: teamName, category: 'Apparel' },
    { id: '4', name: `${teamName} Cap`, price: 35.00, image: '/next.svg', team: teamName, category: 'Accessories' },
  ];

  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.teamName}>{teamName} Collection</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Official merchandise and gear</p>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>3</span>
            <span className={styles.statLabel}>World Cups</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>15</span>
            <span className={styles.statLabel}>Cont. Cups</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1</span>
            <span className={styles.statLabel}>FIFA Rank</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.collection}`}>
        <h2 className={styles.sectionTitle}>Shop the Collection</h2>
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
