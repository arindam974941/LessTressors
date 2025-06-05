import React, { useEffect, useState } from 'react';
import SellerNavbar from '../components/SellerNavbar';
import { fetchProducts } from '../api/products';
import { useNavigate } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';

const SellerHome = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <SellerNavbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Marketplace Products</h2>
        <button
          className="seller-btn"
          style={{ marginBottom: '2rem' }}
          onClick={() => navigate('/add-product')}
        >
          List your product
        </button>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SellerHome;