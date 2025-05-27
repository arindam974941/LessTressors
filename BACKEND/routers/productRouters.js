import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getMyProducts
} from '../controllers/productController.js';
import { isAuthenticated } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getAllProducts);          // GET /api/products
router.get('/:id', getProductById);      // GET /api/products/:id

// Protected Routes
router.post('/', isAuthenticated, addProduct);                // POST /api/products
router.get('/my/products', isAuthenticated, getMyProducts);   // GET /api/products/my/products
router.put('/:id', isAuthenticated, updateProduct);           // PUT /api/products/:id
router.delete('/:id', isAuthenticated, deleteProduct);        // DELETE /api/products/:id

export default router;
