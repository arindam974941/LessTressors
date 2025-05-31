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
import upload from '../Middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

router.post('/', isAuthenticated, upload.single('image'), addProduct);
router.get('/my/products', isAuthenticated, getMyProducts);
router.put('/:id', isAuthenticated, updateProduct);
router.delete('/:id', isAuthenticated, deleteProduct);

export default router;