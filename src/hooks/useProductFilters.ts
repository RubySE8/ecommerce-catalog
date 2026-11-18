
import { useState, useMemo } from 'react';
import type { Product } from '../types/product';

export type SortOption = 'none' | 'price-asc' | 'price-desc';

const searchProducts = (
  products: Product[],
  searchTerm: string
): Product[] => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) return products;

  return products.filter((product) =>
    product.title.toLowerCase().includes(term)
  );
};

const filterByCategory = (
  products: Product[],
  category: string
): Product[] => {
  if (category === 'all') return products;

  return products.filter(
    (product) => product.category === category
  );
};

const sortProducts = (
  products: Product[],
  sortOrder: SortOption
): Product[] => {
  if (sortOrder === 'none') return products;

  return [...products].sort((a, b) =>
    sortOrder === 'price-asc'
      ? a.price - b.price
      : b.price - a.price
  );
};

export const useProductFilters = (initialProducts: Product[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<SortOption>('none');

  const filteredProducts = useMemo(() => {
    const searched = searchProducts(initialProducts, searchTerm);

    const categorized = filterByCategory(
      searched,
      selectedCategory
    );

    return sortProducts(categorized, sortOrder);
  }, [initialProducts, searchTerm, selectedCategory, sortOrder]);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
    filteredProducts,
  };
};
