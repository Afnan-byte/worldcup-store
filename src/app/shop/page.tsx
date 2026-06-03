import styles from './page.module.css';
import ProductCard from '@/components/ui/ProductCard';

const PRODUCTS = [
  { id: '1', name: 'Official 2026 World Cup Match Ball', price: 165.00, image: '/next.svg', team: 'FIFA', category: 'Equipment' },
  { id: '2', name: 'Argentina Home Jersey - Authentic', price: 130.00, image: '/jersey.png', team: 'Argentina', category: 'Jerseys' },
  { id: '3', name: 'Brazil Away Jersey 2026', price: 110.00, image: '/jersey.png', team: 'Brazil', category: 'Jerseys' },
  { id: '4', name: 'France Pre-Match Training Jacket', price: 95.00, image: '/jersey.png', team: 'France', category: 'Apparel' },
  { id: '5', name: 'Germany Home Jersey', price: 100.00, image: '/jersey.png', team: 'Germany', category: 'Jerseys' },
  { id: '6', name: 'England Classic Cap', price: 35.00, image: '/next.svg', team: 'England', category: 'Accessories' },
];

export default function Shop() {
  return (
    <div className={`container ${styles.shopContainer}`}>
      <aside className={styles.sidebar}>
        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Category</h3>
          <div className={styles.filterList}>
            <label className={styles.filterLabel}><input type="checkbox" /> Jerseys</label>
            <label className={styles.filterLabel}><input type="checkbox" /> T-Shirts</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Hoodies</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Accessories</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Equipment</label>
          </div>
        </div>
        
        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Teams</h3>
          <div className={styles.filterList}>
            <label className={styles.filterLabel}><input type="checkbox" /> Argentina</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Brazil</label>
            <label className={styles.filterLabel}><input type="checkbox" /> France</label>
            <label className={styles.filterLabel}><input type="checkbox" /> Germany</label>
            <label className={styles.filterLabel}><input type="checkbox" /> England</label>
          </div>
        </div>

        <div className={styles.filterGroup}>
          <h3 className={styles.filterTitle}>Price</h3>
          <div className={styles.filterList}>
            <label className={styles.filterLabel}><input type="radio" name="price" /> Under $50</label>
            <label className={styles.filterLabel}><input type="radio" name="price" /> $50 - $100</label>
            <label className={styles.filterLabel}><input type="radio" name="price" /> Over $100</label>
          </div>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.title}>All Products</h1>
          <div className={styles.controls}>
            <input type="text" placeholder="Search Products..." className={styles.searchInput} />
            <select className={styles.sortSelect} defaultValue="popularity">
              <option value="popularity">Popularity</option>
              <option value="price-low">Price Low to High</option>
              <option value="price-high">Price High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
        
        <div className={styles.grid}>
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
