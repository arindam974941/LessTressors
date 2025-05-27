import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import ProductGrid from '../components/ProductGrid';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => alert('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="container">
      <h2 className="text-center my-6">All Products</h2>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;