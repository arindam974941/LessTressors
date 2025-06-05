import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import HeroSection from "./components/HeroSection";
import Collections from "./components/Collections";
import BusinessBanner from "./components/BusinessBanner";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "./pages/Homepage";
import UnderPriviledged from "./pages/UnderPriviledged";
import ProductDetails from "./pages/ProductDetails";
import ProductForm from "./components/ProductForm";
import SellerHome from './pages/SellerHome';
import SellerProducts from './pages/SellerProducts';
import SellerSignup from './pages/SellerSignup';
import SellerLogin from './pages/SellerLogin';
import CartPage from './pages/CartPage';

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element: (
        <>
        <Header/>
        <Homepage/>
        <Footer/>
        </>
      )
    },
    {
      path: "/products", 
      element: (
        <>
        <Header />
        <ProductsPage />
        <Footer />
        </>
      ) },    
    {path: "/add-product", element: <ProductForm /> },
    {path: "/underpriviledged", element: <UnderPriviledged /> },
    {path: "/product/:id", element: <ProductDetails /> },
    {path: "/seller", element: <SellerHome /> },
    {path: "/seller/products", element: <SellerProducts /> },
  ]);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/products" element={<ProductsPage />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/underpriviledged" element={<UnderPriviledged />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/seller" element={<SellerHome />} />
          <Route path="/seller/products" element={<SellerProducts />} />
           <Route path="/seller/signup" element={<SellerSignup />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router> */}
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
