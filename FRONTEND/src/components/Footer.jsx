import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>demo@gmail.com</p>
          <p>9876543210</p>
          <p>Somewhere, Ecospace, Kolkata-00</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
           
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Links</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">All rights reserved @Les Tresors</p>
    </footer>
  );
};

export default Footer;
