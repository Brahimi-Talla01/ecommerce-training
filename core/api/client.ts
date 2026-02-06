import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exemple dintercepteur de requête simple
apiClient.interceptors.request.use(
  (config) => {
    console.log('Requête API:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse
apiClient.interceptors.response.use(
  (response) => {
    console.log('Réponse API:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Erreur API:', error.message);
    return Promise.reject(error);
  }
);