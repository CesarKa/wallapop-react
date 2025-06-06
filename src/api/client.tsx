import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const setAuthorizationHeader = (accessToken: string) => {
  client.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
};

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers["Authorization"];
};
