import styles from './page.module.css';
import Button from '@/components/ui/Button';

export default function Dashboard() {
  return (
    <div className={`container ${styles.container}`}>
      <aside className={styles.sidebar}>
        <div className={`${styles.navItem} ${styles.active}`}>Profile</div>
        <div className={styles.navItem}>Order History</div>
        <div className={styles.navItem}>Wishlist</div>
        <div className={styles.navItem}>Saved Addresses</div>
        <div className={styles.navItem}>Account Settings</div>
      </aside>
      
      <main className={styles.content}>
        <h1 className={styles.title}>My Profile</h1>
        
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Personal Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Full Name</span>
              <span className={styles.infoValue}>John Doe</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>john.doe@example.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>+1 (555) 123-4567</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Member Since</span>
              <span className={styles.infoValue}>May 2026</span>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Recent Orders</h2>
          <p style={{ color: 'var(--text-secondary)' }}>You have no recent orders.</p>
        </div>
      </main>
    </div>
  );
}
