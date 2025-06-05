import express from 'express';
import Seller from '../models/Seller.model.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Generate JWT
const generateToken = (seller) => {
  return jwt.sign(
    { id: seller._id, email: seller.email, name: seller.name },
    process.env.JWT_SECRET,
    { expiresIn: '3d' }
  );
};

// Seller Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, phone, address, shopName } = req.body;
  try {
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) return res.status(400).json({ message: 'Seller already exists' });

    const newSeller = new Seller({ name, email, password, phone, address, shopName });
    await newSeller.save();

    const token = generateToken(newSeller);
    res
      .cookie('sellerToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'None',
        maxAge: 3 * 24 * 60 * 60 * 1000,
      })
      .status(201)
      .json({ message: 'Seller registered successfully', seller: { id: newSeller._id, name, email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Seller Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const seller = await Seller.findOne({ email });
    if (!seller) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await seller.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(seller);
    res
      .cookie('sellerToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'None',
        maxAge: 3 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: 'Login successful', seller: { id: seller._id, name: seller.name, email: seller.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;