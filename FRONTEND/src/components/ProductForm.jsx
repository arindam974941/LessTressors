import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    description: '',
    images: [],
    inStock: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      alert('Product added!');
      onClose();
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="brand" placeholder="Brand" onChange={handleChange} />
          <input name="category" placeholder="Category" onChange={handleChange} required />
          <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} />
          <input name="inStock" type="number" placeholder="Stock" onChange={handleChange} />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;