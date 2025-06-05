import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginForm.css';

const SellerSignupForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    shopName: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup request
      const res = await axios.post('https://lesstressors.onrender.com/seller/signup', form, { withCredentials: true });
      // Save the token (if your backend returns it)
      if (res.data.token) {
        localStorage.setItem('sellerToken', res.data.token);
      }
      alert('Seller registered and logged in!');
      // Redirect to dashboard or intended page
      const redirectTo = location.state?.from || '/seller/products';
      navigate(redirectTo);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Seller Sign Up</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="shopName" placeholder="Shop Name" onChange={handleChange} />
      <button type="submit">Register</button>
      <div className="login-links">
        <p>
          Already have an account?{' '}
          <a href="/seller/login" className="signup-link" onClick={e => { e.preventDefault(); navigate('/seller/login'); }}>
            Log In
          </a>
        </p>
      </div>
    </form>
  );
};

export default SellerSignupForm;