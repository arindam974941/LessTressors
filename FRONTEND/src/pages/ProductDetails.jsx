import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-6 text-center">Loading...</div>;
  }

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
          src={product.images && product.images.length > 0 ? product.images[0] : "/placeholder.png"}
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