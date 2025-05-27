import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';
import HeroSection from './components/HeroSection';
import Collections from './components/Collections';
import BusinessBanner from './components/BusinessBanner';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';
import { useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Homepage from './pages/Homepage';
import UnderPriviledged from './pages/UnderPriviledged';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/products"
            element={
                <ProductsPage />
            }
          />
          
            <Route
            path="/underPriviledged"
            element={
                <UnderPriviledged />
            }
          />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
