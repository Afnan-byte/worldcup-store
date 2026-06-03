import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';

export default async function ProductDetails({ params }: { params: { id: string } }) {
  // Await the params object before accessing properties
  const resolvedParams = await params;
  
  // Dummy data for demonstration
  const product = {
    id: resolvedParams.id,
    name: 'Argentina Home Jersey - Authentic',
    price: 130.00,
    image: '/jersey.png',
    team: 'Argentina',
    description: 'Experience the thrill of the match with the official Argentina Home Jersey. Crafted with cutting-edge moisture-wicking technology, this authentic jersey ensures you stay cool and comfortable whether you are on the pitch or cheering from the stands. Featuring the iconic albiceleste stripes and the proud national crest, it is a must-have for any true fan.',
  };

  const relatedProducts = [
    { id: '3', name: 'Brazil Away Jersey 2026', price: 110.00, image: '/jersey.png', team: 'Brazil', category: 'Jerseys' },
    { id: '4', name: 'France Pre-Match Training Jacket', price: 95.00, image: '/jersey.png', team: 'France', category: 'Apparel' },
    { id: '5', name: 'Germany Home Jersey', price: 100.00, image: '/jersey.png', team: 'Germany', category: 'Jerseys' },
  ];

  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageGallery}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className={styles.mainImage} 
            />
          </div>
          <div className={styles.thumbnails}>
            <div className={`${styles.thumbnailWrapper} ${styles.active}`}>
              <Image src={product.image} alt="Thumbnail 1" fill />
            </div>
            <div className={styles.thumbnailWrapper}>
              <Image src={product.image} alt="Thumbnail 2" fill />
            </div>
            <div className={styles.thumbnailWrapper}>
              <Image src={product.image} alt="Thumbnail 3" fill />
            </div>
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.teamName}>{product.team}</div>
          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>${product.price.toFixed(2)}</div>
          
          <p className={styles.description}>
            {product.description}
          </p>

          <div className={styles.actions}>
            <div className={styles.quantitySelector}>
              <button className={styles.quantityBtn}>-</button>
              <div className={styles.quantityValue}>1</div>
              <button className={styles.quantityBtn}>+</button>
            </div>
            <Button size="lg" className="flex-1">Add to Cart</Button>
            <Button size="lg" className={`flex-1 ${styles.buyNowBtn}`} variant="outline">Buy Now</Button>
          </div>
        </div>
      </div>

      <div className={`container ${styles.relatedSection}`}>
        <h2 className={styles.relatedTitle}>Related Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {relatedProducts.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </>
  );
}
