import React, { useEffect, useState } from 'react';
import SellerNavbar from '../components/SellerNavbar';
import axios from 'axios';
import ProductGrid from '../components/ProductGrid';

const SellerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://lesstressors.onrender.com/my/products', { withCredentials: true })
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <SellerNavbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Your Listed Products</h2>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SellerProducts;