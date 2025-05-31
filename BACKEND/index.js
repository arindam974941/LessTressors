import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routers/userRouters.js';
import authRoutes from './routers/authRoutes.js';
import productRoutes from './routers/productRouters.js';
import wishlistRoutes from './routers/wishlistRoutes.js';
import cartRoutes from './routers/cartRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express(); // Initialize the app instance

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://lesstressors.onrender.com', 
  credentials: true, // Allow cookies to be sent
}));

// Routes
const PORT = process.env.PORT || 5000;
app.use('/api/users', userRoutes);
app.use('/', authRoutes);
app.use('/products', productRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('/cart', cartRoutes);

// Database Connection and Server Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});