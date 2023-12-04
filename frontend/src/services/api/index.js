import axios from 'axios';
import Cookie from 'js-cookie';

const API = axios.create({
  baseURL: 'http://localhost:6060/api'
});

API.interceptors.response.use(
  (response) => {
    // If the request was successful, return the response
    return response;
  },
  (error) => {
    // Custom error handling logic
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Response Error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error:', error.message);
    }

    // Return a rejected Promise with the error object
    return Promise.reject(error.response.data || error.request || error.message || error);
  }
);

// add that each time a request is made, the token is added to the header from the cookie accessToken
API.interceptors.request.use(
  (config) => {
    const token = Cookie.get('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;