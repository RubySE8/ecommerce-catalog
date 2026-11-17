import { useState, useEffect } from 'react';
import type { Product } from '../types/product';
import { fetchProducts } from '../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data.products);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, isLoading, error };
};