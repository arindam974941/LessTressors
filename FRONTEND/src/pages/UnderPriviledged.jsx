import React from "react";
import "./underpriviledged.css";
import sapiensImage from "../assets/product-img/sapiens2.png";
import elephant from "../assets/product-img/elephant.png"; 
import pot from "../assets/product-img/handmadePot.png";
import handmadeBags from "../assets/product-img/pearlBag.png";
import flowerGirl from "../assets/product-img/flowerGirl.jpg";
import dancingGirl from "../assets/product-img/dancingGirl.jpg";
import greenGirl from "../assets/product-img/GreenGirl.png";

// import React from 'react';
// import './App.css';

function UnderPriviledged() {
  return (
    <div className="app-container">
      {/* <header className="header">
        <div className="logo">LES TRESOR</div>
        <nav className="nav-links">
          <span>Home</span>
          <span>Categories</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </nav>
        <button className="login-button">Login</button>
      </header> */}

      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering dreams through every purchase</h1>
          <p>Every item you buy helps underprivileged artisans build a better future.</p>
          <button className="hero-button">Shop now</button>
        </div>
        <div className="hero-image">
          {/* This would typically be an img tag, but for exact UI replication based on the image, it's a background or a div with a background */}
          <img id="sapiens" src={sapiensImage}  alt="Empowering dreams" /> {/* Placeholder image */}
        </div>
      </section>

      <section className="mission-section">
        <h2>Discover Our mission</h2>
        <p>At the heart of our platform is commitment to empowermentg underprivileged women by providing them with a sustainable platform</p>
        <div className="product-showcase">
          <div className="product-card">
            <img src={elephant} alt="elephant" />
            <p className="product-name">Handmade showpiece</p>
          </div>
          <div className="product-card">
            <img src={pot} alt="Product 2" />
            <p className="product-name">handmade pot</p>
          </div>
          <div className="product-card">
            <img src={handmadeBags} alt="Product 3" />
            <p className="product-name">handmade Bags</p>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <img src={flowerGirl} alt="flower girl" />
            <p>Explore how we are creating sustainable changes</p>
          </div>
          <div className="impact-card">
            <img src={dancingGirl} alt="dancing girl" />
            <p>Discover the inspiring stories of the women</p>
          </div>
        </div>
      </section>

      <section className="empower-women-section">
        <div className="empower-content">
          <h2>Empower Women</h2>
          <p>At the heart of our platform we are committed to empowering underprivileged women by providing them with a sustainable platform</p>
          <button className="empower-button">Support now</button>
        </div>
        <div className="empower-image">
          <img id="greenGirl" src={greenGirl} alt="Empower Women" />
        </div>
      </section>

      {/* <footer className="footer">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>lestresor@gmail.com</p>
          <p>Salt Lake, Sector - V, Kolkata-700091</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Our Impact</p>
        </div>
        <div className="footer-column">
          <h3>Social Links</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </footer> */}
    </div>
  );
}

export default UnderPriviledged;
