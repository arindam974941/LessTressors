import axios from 'axios';

const API = axios.create({
  baseURL: 'https://lesstressors.onrender.com', // Your backend URL
  withCredentials: true,
});

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);