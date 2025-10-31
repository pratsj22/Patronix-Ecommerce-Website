import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Add request interceptor to attach access token (if present)
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('accessToken');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, error => Promise.reject(error));

// TODO: Add response interceptor to handle 401s and refresh tokens
// api.interceptors.response.use(response => response, async (error) => {
//   // handle token refresh
//   return Promise.reject(error);
// });

export default api;
