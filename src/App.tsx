// src/App.tsx
import { useState, useEffect } from 'react';
import { useProducts } from './hooks/useProducts';
import { useProductFilters } from './hooks/useProductFilters';
import { fetchCategories } from './services/api';
import type { Category } from './types/product'; 
import { Loader } from './components/common/Loader';
import { ErrorMessage } from './components/common/ErrorMessage';
import { ProductCard } from './components/products/ProductCard';
import { SearchBar } from './components/filters/SearchBar';
import { CategoryFilter } from './components/filters/CategoryFilter';
import { SortSelect } from './components/filters/SortSelect';

function App() {
  const { products, isLoading, error } = useProducts();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadCats = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        console.error('Error cargando categorías', err);
      }
    };
    loadCats();
  }, []);

  const {
    searchTerm, setSearchTerm,
    selectedCategory, setSelectedCategory,
    sortOrder, setSortOrder,
    filteredProducts,
  } = useProductFilters(products);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="main-container">
        <h1 className="page-title">Catálogo de Productos</h1>
      <div className="filters-container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <SortSelect sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty-message">No se encontraron productos con esos filtros.</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;