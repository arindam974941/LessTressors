import express from 'express';
import { addToWishlist, getWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
import { isAuthenticated } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.post('/', isAuthenticated, addToWishlist);                  // Add product to wishlist
router.get('/', isAuthenticated, getWishlist);                    // View wishlist
router.delete('/:productId', isAuthenticated, removeFromWishlist); // Remove from wishlist

export default router;
