import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/ui/Button';

export default function Checkout() {
  const subtotal = 425.00;
  const shipping = 15.00;
  const tax = 34.00;
  const total = 474.00;

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Checkout</h1>
      
      <div className={styles.content}>
        <div>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <form className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>First Name</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Last Name</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Address</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>City</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Postal Code</label>
                <input type="text" className={styles.input} />
              </div>
            </form>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Payment Method</h2>
            <div className={styles.paymentMethods}>
              <label className={`${styles.paymentMethod} ${styles.active}`}>
                <input type="radio" name="payment" defaultChecked />
                <span>Credit Card (Stripe)</span>
              </label>
              <label className={styles.paymentMethod}>
                <input type="radio" name="payment" />
                <span>PayPal</span>
              </label>
              <label className={styles.paymentMethod}>
                <input type="radio" name="payment" />
                <span>Razorpay</span>
              </label>
            </div>
            
            <div className={styles.formGrid} style={{ marginTop: '1.5rem' }}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label className={styles.label}>Card Number</label>
                <input type="text" className={styles.input} placeholder="**** **** **** ****" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Expiry Date</label>
                <input type="text" className={styles.input} placeholder="MM/YY" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>CVC</label>
                <input type="text" className={styles.input} placeholder="***" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.summary}>
            <h2 className={styles.sectionTitle}>Order Summary</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button size="lg" fullWidth>Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
