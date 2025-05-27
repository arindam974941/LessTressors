import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.images?.[0] || '/placeholder.png'}
      alt={product.name}
      className="product-image"
    />
    <h3>{product.name}</h3>
    <p className="brand">{product.brand}</p>
    <p className="price">₹{product.price}</p>
    {/* Add more details or a link to product detail page */}
  </div>
);

export default ProductCard;