import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css'; // Assuming you have some styles for the grid

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
);

export default ProductGrid;