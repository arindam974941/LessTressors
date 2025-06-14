import express from 'express';
import User from '../models/User.model.js';
import { isAuthenticated } from '../Middleware/authMiddleware.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password,
      phone,
      address,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.put('/role', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.role = req.body.role;
    await user.save();
    res.json({ message: 'Role updated', role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update role' });
  }
});

export default router;
