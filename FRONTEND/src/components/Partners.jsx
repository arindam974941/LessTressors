import React from 'react';
import './Partners.css';
import hm from '../assets/hm_logo.png';
import gucci from '../assets/gucci_logo.png';
import zara from '../assets/zara_logo.png';
import gap from '../assets/gap_logo.png';

const Partners = () => {
  return (
    <section className="partners" data-aos="fade">
      {/* watermark */}
      <div className="watermark">LES TRESOR</div>
      {/* <p class="watermark" id='businessWatermark'> LES TRESOR</p> */}
      {/* watermark */}
      <h2>Our Partners</h2>
      <div className="partner-logos">
        <img src={hm} alt="H&M" />
        <img src={gucci} alt="Gucci" />
        <img src={zara} alt="Zara" />
        <img src={gap} alt="GAP" />
      </div>
    </section>
  );
};

export default Partners;
