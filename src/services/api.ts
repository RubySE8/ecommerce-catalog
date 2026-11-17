import type { Product, ProductsResponse, Category } from '../types/product';

const API_URL = 'https://dummyjson.com';

const fetchData = async <T>(
    url: string,
    errorMessage: string
  ): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
};

export const fetchProducts = (): Promise<ProductsResponse> => {
  return fetchData<ProductsResponse>(
    `${API_URL}/products?limit=100`,
    'Error al cargar los productos'
  );
};

export const fetchCategories = (): Promise<Category[]> => {
  return fetchData<Category[]>(
    `${API_URL}/products/categories`,
    'Error al cargar las categorías'
  );
};

export const fetchProductById = (id: number): Promise<Product> => {
  return fetchData<Product>(
    `${API_URL}/products/${id}`,
    'Error al cargar el producto'
  );
};