import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductForm.css';

const ProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    description: '',
    inStock: 1,
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => data.append(key, value));
      if (imageFile) data.append('image', imageFile);

      await axios.post('https://lesstressors.onrender.com/products', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added!');
      navigate('/products');
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="product-form-container">
      <form className="product-form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Product</h2>
        <div className="form-group">
          <label>Name*</label>
          <input name="name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input name="brand" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Category*</label>
          <input name="category" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price*</label>
          <input name="price" type="number" min="0" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input name="inStock" type="number" min="1" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Product Image*</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="image-preview" />
          )}
        </div>
        <button className="submit-btn" type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;