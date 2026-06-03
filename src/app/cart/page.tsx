import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/ui/Button';

export default function Cart() {
  const cartItems = [
    { id: '1', name: 'Official 2026 World Cup Match Ball', price: 165.00, image: '/next.svg', team: 'FIFA', quantity: 1 },
    { id: '2', name: 'Argentina Home Jersey - Authentic', price: 130.00, image: '/jersey.png', team: 'Argentina', quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className={`container ${styles.container}`}>
      <h1 className={styles.title}>Your Cart</h1>
      
      <div className={styles.content}>
        <div className={styles.cartItems}>
          {cartItems.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemImageWrapper}>
                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemTeam}>{item.team}</div>
                <div className={styles.itemPrice}>${item.price.toFixed(2)}</div>
              </div>
              <div className={styles.itemActions}>
                <button className={styles.removeBtn}>Remove</button>
                <div className={styles.quantitySelector}>
                  <button className={styles.quantityBtn}>-</button>
                  <div className={styles.quantityValue}>{item.quantity}</div>
                  <button className={styles.quantityBtn}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          
          <form className={styles.couponForm}>
            <input type="text" placeholder="Promo code" className={styles.couponInput} />
            <Button variant="outline" type="button">Apply</Button>
          </form>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          
          <Link href="/checkout" style={{ display: 'block' }}>
            <Button size="lg" fullWidth>Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
