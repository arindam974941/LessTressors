// Import required modules
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router(); // Create a new Express router

// Generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name }, // payload
    process.env.JWT_SECRET, // secret key
    { expiresIn: '3d' } // token expiry
  );
};

// ---------------------- REGISTER --------------------------
router.post('/signup', async (req, res) => {
  const { name, email, password, phone } = req.body; // Destructure form data

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: 'User already exists' });

    // Hash the password
    const salt = await bcrypt.genSalt(10); // generate salt
    const hashedPassword = await bcrypt.hash(password, salt); // hash password

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await newUser.save(); // Save user to DB

    // Generate token and return
    const token = generateToken(newUser);
   res
  .cookie('token', token, {
    httpOnly: true, // prevents JavaScript access
    secure: process.env.NODE_ENV === 'production', // send over HTTPS only in production
    sameSite: 'Strict', // protects against CSRF
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  })
  .status(201)
  .json({
    message: 'User registered successfully',
    user: { id: newUser._id, name, email },
  });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ---------------------- LOGIN --------------------------
router.post('/login', async (req, res) => {
  const { email, password } = req.body; // Removed 'name' from destructuring

  try {
    // Find the user by email
    const user = await User.findOne({ email });
     console.log(user); 
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' }); // User not found
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch); 
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' }); // Password mismatch
    }

    // Generate a JWT token
    const token = generateToken(user);

    // Send the token in a cookie
    res
      .cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      })
      .status(200)
      .json({
        message: 'Login successful',
        user: { id: user._id, name: user.name, email: user.email },
      });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ---------------------- LOGOUT --------------------------
router.post('/logout', (req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      expires: new Date(0), // Expire the cookie immediately
    })
    .status(200)
    .json({ message: 'Logout successful' });
});
export default router; // Export the router