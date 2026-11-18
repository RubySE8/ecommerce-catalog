import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">
         {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
      </p>
      <p>⭐ {product.rating} / 5</p>
    </div>
  );
};