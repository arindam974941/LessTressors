import React, { useState } from 'react';
import './BusinessBanner.css';
import elephant from '../assets/elephat.png';
import bag from '../assets/bag3.png';
import jwlry from '../assets/jwlry2.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm'; // Create this component

const BusinessBanner = () => {
  const navigate = useNavigate();

  const handleJoinAsSeller = () => {
  
  navigate('/seller');
};

  return (
    <section className="business-banner" data-aos="fade">
      <div className="watermark">LES TRESOR</div>
      <img id='elephant-img' src={elephant} alt="elephant-image" />
      <img id='bag-img' src={bag} alt="bag" />
      <img id='jwlry-img' src={jwlry} alt="jewellery" />
      <div className="banner-box">
        <h2>Are You a Business Owner ?</h2>
        <p>Join with us and sell your product on our platform</p>
         <button className="seller-btn" onClick={handleJoinAsSeller}>Join As Seller</button>
      </div>
      
    </section>
  );
};

export default BusinessBanner;