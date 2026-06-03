import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          WorldCup <span>Store</span>
        </Link>

        <nav className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <Link href="/teams" className={styles.link}>Teams</Link>
          <Link href="/dashboard" className={styles.link}>Dashboard</Link>
        </nav>

        <div className={styles.actions}>
          {/* Search Icon */}
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          {/* Account Icon */}
          <Link href="/dashboard" className={styles.iconBtn} aria-label="Account">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className={styles.badge}>2</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
