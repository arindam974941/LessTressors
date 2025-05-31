import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts } from '../api/products';

const staticProducts = [
  {
    id: 1,
    name: 'Smartphone X200',
    description: 'A powerful smartphone with an amazing camera.',
    price: 799,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'High-quality sound with noise cancellation.',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1512499617640-c2f99912a5a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    description: 'Ultimate gaming performance with RTX graphics.',
    price: 1499,
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Smartwatch Pro',
    description: 'Track your health and fitness with style.',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
  },
];


const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-8">All Products</h2>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;