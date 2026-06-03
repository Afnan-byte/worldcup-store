import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Official 2026 World Cup Match Ball',
    price: 165.00,
    image: '/next.svg',
    team: 'FIFA',
    category: 'Equipment',
  },
  {
    id: '2',
    name: 'Argentina Home Jersey - Authentic',
    price: 130.00,
    image: '/jersey.png',
    team: 'Argentina',
    category: 'Jerseys',
  },
  {
    id: '3',
    name: 'Brazil Away Jersey 2026',
    price: 110.00,
    image: '/jersey.png',
    team: 'Brazil',
    category: 'Jerseys',
  },
  {
    id: '4',
    name: 'France Pre-Match Training Jacket',
    price: 95.00,
    image: '/jersey.png',
    team: 'France',
    category: 'Apparel',
  },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image 
            src="/stadium_bg.png" 
            alt="World Cup Stadium" 
            fill 
            className={styles.heroBgImage} 
            priority
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>
            Celebrate the World Cup <br />
            <span className={styles.titleHighlight}>in Style</span>
          </h1>
          <p className={styles.subtitle}>
            Premium sports merchandise for the ultimate fans. Get ready for the biggest tournament on earth with our exclusive collections.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/shop">
              <Button size="lg" variant="primary">Shop Now</Button>
            </Link>
            <Link href="/teams">
              <Button size="lg" variant="outline">Explore Collections</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <div className={styles.productGrid}>
            {FEATURED_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className={`${styles.section} glass`} style={{ margin: '0 1.5rem 4rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Join the Squad</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Subscribe to our newsletter for exclusive offers, new arrivals, and World Cup news.
          </p>
          <form style={{ display: 'flex', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: 1, 
                padding: '0.75rem 1rem', 
                borderRadius: '8px', 
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(0,0,0,0.5)',
                color: 'white'
              }} 
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
