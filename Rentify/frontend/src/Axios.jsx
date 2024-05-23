// src/axiosConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api', // Replace with your API base URL
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
