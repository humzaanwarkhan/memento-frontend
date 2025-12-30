import axios from "axios";

const api = axios.create({
  baseURL: window.location.origin.replace("5173", "5000").replace("localhost", "memento.test")

});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
