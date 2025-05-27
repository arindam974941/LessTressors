import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const staticProducts = [
  {
    id: 1,
    name: "Smartphone X200",
    description: "A powerful smartphone with an amazing camera.",
    price: 799,
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    brand: "TechBrand",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    price: 199,
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f99912a5a0?auto=format&fit=crop&w=800&q=80",
    brand: "SoundX",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    description: "Ultimate gaming performance with RTX graphics.",
    price: 1499,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    brand: "GameTech",
  },
  {
    id: 4,
    name: "Smartwatch Pro",
    description: "Track your health and fitness with style.",
    price: 299,
    imageUrl:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    brand: "FitBrand",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = staticProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Product Not Found
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="product-details-container bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-8">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
        aria-label="Go back to products"
      >
        &larr; Back to Products
      </button>

      <div className="product-details-flex mt-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <button className="add-to-cart-btn" aria-label="Add product to cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
