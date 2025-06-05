import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

const productSchema = new mongoose.Schema({
 seller: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Seller',
  required: true
},
  name: { type: String, required: true },
  brand: String,
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  images: [String],
  inStock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
