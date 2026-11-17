// src/App.tsx
import { useProducts } from './hooks/useProducts';
import { Loader } from './components/common/Loader';
import { ErrorMessage } from './components/common/ErrorMessage';
import { ProductCard } from './components/products/ProductCard';

function App() {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catálogo de Productos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;