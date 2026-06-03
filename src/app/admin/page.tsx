import styles from './page.module.css';

export default function AdminDashboard() {
  const recentOrders = [
    { id: '#ORD-101', customer: 'Alex Johnson', date: '2026-06-03', total: '$145.00', status: 'Completed' },
    { id: '#ORD-102', customer: 'Maria Garcia', date: '2026-06-02', total: '$210.00', status: 'Pending' },
    { id: '#ORD-103', customer: 'David Smith', date: '2026-06-01', total: '$65.00', status: 'Completed' },
  ];

  return (
    <div className={`container ${styles.container}`}>
      <aside className={styles.sidebar}>
        <div className={`${styles.navItem} ${styles.active}`}>Overview</div>
        <div className={styles.navItem}>Sales Reports</div>
        <div className={styles.navItem}>Products</div>
        <div className={styles.navItem}>Orders</div>
        <div className={styles.navItem}>Customers</div>
        <div className={styles.navItem}>Inventory</div>
      </aside>
      
      <main className={styles.content}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Sales</span>
            <span className={styles.statValue}>$12,450</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Orders</span>
            <span className={styles.statValue}>156</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Active Customers</span>
            <span className={styles.statValue}>1,243</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Total Products</span>
            <span className={styles.statValue}>89</span>
          </div>
        </div>

        <div className={styles.tableSection}>
          <h2 className={styles.tableTitle}>Recent Orders</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>
                    <span className={`${styles.status} ${order.status === 'Completed' ? styles.statusCompleted : styles.statusPending}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
