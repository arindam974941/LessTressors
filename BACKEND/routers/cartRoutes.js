import express from 'express';
import {
  addToCart,
  getCart,
  removeFromCart
} from '../controllers/cartController.js';

import { isAuthenticated } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post('/', isAuthenticated, addToCart);                    // POST /api/cart
router.get('/', isAuthenticated, getCart);                       // GET /api/cart
router.delete('/:productId', isAuthenticated, removeFromCart);   // DELETE /api/cart/:productId

export default router;
