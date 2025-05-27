import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  country: String
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
  address: [addressSchema],
  role: { type: String, enum: ['B2B', 'B2C', 'admin'], default: 'B2C' },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;
