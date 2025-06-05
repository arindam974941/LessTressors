import React from 'react';
import { Link } from 'react-router-dom';
import './SellerNavbar.css';

const SellerNavbar = () => (
  <nav className="seller-navbar">
    <Link to="/seller">Home</Link>
    <Link to="/seller/products">Your Products</Link>
    <Link to="/about">About</Link>
    <Link to="/seller/signup">Signup</Link>
    <Link to="/seller/login">Login</Link>
  </nav>
);

export default SellerNavbar;