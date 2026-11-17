
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{product.title}</h3>
      <p style={{ textTransform: 'capitalize', color: 'gray' }}>{product.category}</p>
      <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
      <p>⭐ {product.rating} / 5</p>
    </div>
  );
};