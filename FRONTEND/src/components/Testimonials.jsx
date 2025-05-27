import React from 'react';
import './Testimonials.css';
import client from '../assets/user2.png'; // Replace with the actual client photo

const Testimonials = () => {
  return (
    <section className="testimonials" data-aos="zoom-in">
      {/* watermark */}
      <div className="watermark">LES TRESOR</div>
      {/* <p class="watermark" id='businessWatermark'> LES TRESOR</p> */}
      {/* watermark */}
      <h2>Happy Client Testimonials</h2>
      <div className="testimonial-box">
        <img src={client} alt="Client" className="client-photo" />
        <p className="quote">
          “I am not happy with this product. Best product and love website.”
        </p>
        <h4 className="client-name">– Afridwan Morsel</h4>
      </div>
    </section>
  );
};

export default Testimonials;
