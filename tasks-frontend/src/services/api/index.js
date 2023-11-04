// axios instance with localhost:6060/api prefix and Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3IxIiwiaWF0IjoxNjk5MTA3MzI5LCJleHAiOjE2OTkxMDkxMjl9.G-r7AaULUtjSZUnmuktvhOO-Y1FN_iogSNZWHrHTUxvW3RyBUC_OMYAC8zDs3sEa0jnHysNWdmGXCPAmrYovWg header

import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3IxIiwiaWF0IjoxNjk5MTA3MzI5LCJleHAiOjE2OTkxMDkxMjl9.G-r7AaULUtjSZUnmuktvhOO-Y1FN_iogSNZWHrHTUxvW3RyBUC_OMYAC8zDs3sEa0jnHysNWdmGXCPAmrYovWg";

const API = axios.create({
  baseURL: 'http://localhost:6060/api',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default API;