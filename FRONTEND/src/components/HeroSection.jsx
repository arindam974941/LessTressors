import React from 'react';
import './HeroSection.css';
import model from '../assets/hero_lady.png';
import happyIcon from '../assets/user1.png';
import bag3 from '../assets/bag3.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    
    <section className="hero" data-aos="fade">
      {/* watermark */}
      <div className="watermark">LES TRESOR</div>
      {/* <p class="watermark" id='businessWatermark'> LES TRESOR</p> */}
      {/* watermark */}
      <div className="hero-content">
        <h1 id='brand-banner'><span className="highlight">LES TRESOR</span> HANDBAGS</h1>
        <p>Buy directly from verified global suppliers from India & abroad. Browse our marketplace of over 30,000+ products!</p>
        <div className="hero-actions">
          <button className="shop-now" onClick={() => navigate('/products')}>
            Shop Now</button>
          <div className="discount">
            {/* <div className="circle"></div> */}
            <p class='save'><strong>Save upto 25%</strong><br /> on handbags</p>
          </div>
        </div>
        <div className="circle"></div>
        <img src={bag3} alt="bag3" className="bag3" />

      <div id='users'>
        <img src={happyIcon} alt="Happy Icon" className="happy-icon" />
        <img id='happyuser2' src={happyIcon} alt="Happy Icon" className="happy-icon"  />
        <p id='happy'>Happy Users</p>
        <div id='line'> </div>
      </div>

      </div>
      <div className="hero-image">
        <img src={model} alt="Fashion Model" />
      </div>
    </section>
  );
};

export default HeroSection;
