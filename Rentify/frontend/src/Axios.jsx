// src/axiosConfig.js
import axios from 'axios';
import { toast } from 'react-toastify';


const api = axios.create({
    baseURL: 'http://localhost:4000/api', // Replace with your API base URL
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  api.interceptors.response.use(
    (response) => {
      // Any status code that lies within the range of 2xx causes this function to trigger
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx causes this function to trigger
      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Error: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made but no response was received
        toast.error('Error: No response received from server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(`Error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
  

export default api;
