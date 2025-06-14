import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.png"}
      alt={product.name}
      className="product-image"
    />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-brand">Brand: {product.brand || "Generic"}</p>
    <p className="product-price">₹{product.price}</p>
    <Link
      to={`/product/${product._id}`}
      className="product-button"
    >
      View Details
    </Link>
  </div>
);

export default ProductCard;