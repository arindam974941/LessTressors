
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.model.js';

dotenv.config();

const demoProducts = [
  {
    name: 'Handmade Elephant Statue',
    brand: 'Artisan Co.',
    category: 'Decor',
    price: 1200,
    description: 'A beautiful handmade elephant statue crafted by local artisans.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ],
    inStock: 10
  },
  {
    name: 'Pearl Handbag',
    brand: 'Pearl Bags',
    category: 'Accessories',
    price: 850,
    description: 'Elegant pearl handbag perfect for special occasions.',
    images: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    ],
    inStock: 5
  },
  {
    name: 'Handmade Pot',
    brand: 'Pottery House',
    category: 'Home',
    price: 500,
    description: 'A unique handmade pot for your home decor.',
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
    ],
    inStock: 15
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Product.deleteMany({});
    await Product.insertMany(demoProducts);
    console.log('Demo products inserted!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();