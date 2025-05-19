import axios from "axios";

const api = axios.create({
  baseURL: 'https://stackzstore.netlify.app/api', // Replace with your deployed API server URL
});

export default api;