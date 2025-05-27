import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
  withCredentials: true,
});

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);