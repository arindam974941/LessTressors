import React from 'react';
import './Collections.css';
import handbag from '../assets/bag1.png';
import pearlBag from '../assets/pearl_bag.png';
import jewellery from '../assets/jwlry.png';
import handicraft from '../assets/elephat.png';

const collections = [
  { title: 'Handbags', image: handbag },
  { title: 'Pearl Bags', image: pearlBag },
  { title: 'Jewellery', image: jewellery },
  { title: 'Handicrafts', image: handicraft },
];

const Collections = () => {
  return (
    <section className="collections" data-aos="fade">
       {/* watermark */}
       <div className="watermark">COLLECTIONS</div>
      {/* <p class="watermark" id='businessWatermark'> LES TRESOR</p> */}
      {/* watermark */}
      <h2>Collections</h2>
      <div className="collection-grid">
        {collections.map((item, idx) => (
          <div className="collection-card" key={idx}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
