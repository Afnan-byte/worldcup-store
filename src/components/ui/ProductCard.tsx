import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  team: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={`glass glass-hover ${styles.card}`}>
      <div className={styles.teamBadge}>{product.team}</div>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.image || '/next.svg'} 
          alt={product.name} 
          fill
          className={styles.image}
        />
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.bottomRow}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button 
            className={styles.addToCart} 
            aria-label="Add to cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
