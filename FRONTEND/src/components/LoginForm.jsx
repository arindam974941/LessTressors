import { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
  

axios.defaults.withCredentials = true;

function LoginForm({ setShowPopup, setIsLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/login', {
      email: formData.email,
      password: formData.password,
    });
    alert(res.data.message);
    localStorage.setItem('token', res.data.token);
    setShowPopup(false);

    // Redirect to the previous page logic
    const previousPage = localStorage.getItem('previousPage');
    if (!previousPage || previousPage === '/login' || previousPage === '/signup') {
      window.location.href = '/';
    } else {
      window.location.href = previousPage;
    }
    localStorage.removeItem('previousPage');
  } catch (err) {
    alert(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Log In</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
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
      <button type="submit">Login</button>
      <div className="login-links">
        <a href="#" className="forgot-password">Forgot Password?</a>
        <p>
          Don't have an account?{' '}
          <a
            href="/signup"
            className="signup-link"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(false); // Switch to Signup form
              navigate('/signup');
            }}
          >
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;