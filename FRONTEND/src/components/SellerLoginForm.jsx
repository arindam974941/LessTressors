import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoginForm.css';


// After successful login/signup:
// or whatever your backend returns

const SellerLoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const location = useLocation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://lesstressors.onrender.com/seller/login', form, { withCredentials: true });
      alert('Login successful!');
      const redirectTo = location.state?.from || '/seller/products';
      navigate(redirectTo);
      localStorage.setItem('sellerToken', res.data.token);
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Seller Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      <div className="login-links">
        <p>
          Don't have an account?{' '}
          <a href="/seller/signup" className="signup-link" onClick={e => { e.preventDefault(); navigate('/seller/signup'); }}>
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export default SellerLoginForm;