import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            WorldCup <span>Store</span>
          </Link>
          <p className={styles.desc}>
            Premium sports merchandise for the ultimate fans. Celebrate the World Cup in style with our exclusive collections.
          </p>
          <div className={styles.social}>
            {/* Social Icons Placeholder */}
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Shop</h4>
          <div className={styles.links}>
            <Link href="/shop" className={styles.link}>All Products</Link>
            <Link href="/teams" className={styles.link}>Shop by Team</Link>
            <Link href="/shop?category=jerseys" className={styles.link}>Jerseys</Link>
            <Link href="/shop?category=accessories" className={styles.link}>Accessories</Link>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Support</h4>
          <div className={styles.links}>
            <Link href="#" className={styles.link}>Contact Us</Link>
            <Link href="#" className={styles.link}>FAQs</Link>
            <Link href="#" className={styles.link}>Shipping Info</Link>
            <Link href="#" className={styles.link}>Returns</Link>
          </div>
        </div>

        <div>
          <h4 className={styles.title}>Account</h4>
          <div className={styles.links}>
            <Link href="/dashboard" className={styles.link}>My Profile</Link>
            <Link href="/dashboard/orders" className={styles.link}>Orders</Link>
            <Link href="/dashboard/wishlist" className={styles.link}>Wishlist</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} WorldCup Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
