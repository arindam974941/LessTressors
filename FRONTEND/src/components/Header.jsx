import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/Lestresor_logo.png';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import BusinessBanner from './BusinessBanner.jsx'; 

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup forms
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track user authentication
    const [postAuthAction, setPostAuthAction] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();


  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set authentication state based on token presence
  }, []);

   useEffect(() => {
    if (isAuthenticated && postAuthAction === 'seller') {
      // Call backend to update role
      axios.put('http://localhost:5000/api/users/role', { role: 'B2B' }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      }).then(() => {
        // Optionally, trigger product form popup here
        window.location.reload(); // Or set a state to show product form
      });
      setPostAuthAction(null);
    }
  }, [isAuthenticated, postAuthAction]);

   const openLoginPopup = () => {
    localStorage.setItem('previousPage', location.pathname);
    setIsLogin(true);
    setShowPopup(true);
  };

  const openSignupPopup = () => {
    localStorage.setItem('previousPage', location.pathname);
    setIsLogin(false);
    setShowPopup(true);
  };
 
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout'); // Call the logout endpoint
      localStorage.removeItem('token'); // Remove the token from localStorage
      setIsAuthenticated(false); // Update authentication state
      alert('Logout successful');
    } catch (err) {
      alert(err.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <>
      {/* Main Content */}
      <div className={showPopup ? 'blurred' : ''}>
        <header className="header" data-aos="fade">
          <img src={logo} alt="Les Tresor" className="logo" />
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/products">products</a>
            <a href="/about">About</a>
            <a href="/underpriviledged">Under priviledged</a>
          </nav>
          {!isAuthenticated ? (
            <button
              className="login-btn"
              onClick={openLoginPopup}
            >
              Login
            </button>
          ) : (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
           {/* <BusinessBanner openAuthPopup={(action) => {
          setPostAuthAction(action);
          setShowPopup(true);
          setIsLogin(true);
        }} /> */}
        </header>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button
              className="close-btn"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              ✕
            </button>
            {isLogin ? (
              <LoginForm setShowPopup={setShowPopup} setIsLogin={setIsLogin} />
            ) : (
              <SignupForm setShowPopup={setShowPopup} setIsLogin={setIsLogin} />
            )}
          </div>
        </div>
      )}
    </>
  );
}