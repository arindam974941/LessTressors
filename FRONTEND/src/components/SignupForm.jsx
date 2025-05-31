import { useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
import { useNavigate,useLocation } from 'react-router-dom';

function SignupForm({ setShowPopup, setIsLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openSignupPopup = () => {
      localStorage.setItem('previousPage', location.pathname);
      setIsLogin(false);
      setShowPopup(true);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://lesstressors.onrender.com/signup', formData);
      alert(res.data.message); // Show success message
      localStorage.setItem('token', res.data.token); // Save JWT to localStorage
      setShowPopup(false); // Close the popup
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
      <div className="login-links">
        <p>
          Already have an account?{' '}
          <a
            href="/login"
            className="signup-link"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(true); // Switch to Login form
              navigate('/login');
            }}
          >
            Log In
          </a>
        </p>
      </div>
    </form>
  );
}

export default SignupForm;