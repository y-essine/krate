import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c3IxIiwiaWF0IjoxNjk5MTk5MzU5LCJleHAiOjE2OTkyMDExNTl9.3EFDOqF7IZlGuBTMVepLIrRy6Ei1Lu8OOGUuPdEj5GZJmFvdl434JoazNeKxdaUqHW-Aifhdz4dZ1rtX7fZxYw";

const API = axios.create({
  baseURL: 'http://localhost:6060/api'
});

export default API;