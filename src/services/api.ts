import type { Product, ProductsResponse, Category } from '../types/product';

const API_URL = 'https://dummyjson.com';

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(`${API_URL}/products?limit=100`);
  if (!response.ok) throw new Error('Error al cargar los productos');
  return response.json();
};

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) throw new Error('Error al cargar las categorías');
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Error al cargar el producto');
  return response.json();
};