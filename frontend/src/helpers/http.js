import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://6398aaa629930e2bb3be143d.mockapi.io/api/v1/`,
  withCredentials: false,
  headers: {
    "Content-type": "application/json"
  }
});

// apiClient.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${access_token}`;
//   return config;
// })

export default apiClient;